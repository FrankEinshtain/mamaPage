require('dotenv').config()
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/test'
const token = process.env.TOKEN
const chatId = process.env.CHAT_ID
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(token, { polling: true })

mongoose.Promise = global.Promise
mongoose.connect(url, { keepAlive: true }, function (err) {
  if (err) {
    return console.error(err)
  };
  console.log('Successfully Connected To MongoDB FINALLY!!!')
})

const reviewSchema = mongoose.Schema({
  author: String,
  text: String,
  msgId: {
    type: String,
    default: ''
  },
  visible: {
    type: Boolean,
    default: false
  },
  archieved: {
    type: Boolean,
    default: false
  }
})

const mobSchema = mongoose.Schema({
  name: String,
  phone: String,
  msgId: {
    type: String,
    default: ''
  },
  visible: {
    type: Boolean,
    default: false
  },
  archieved: {
    type: Boolean,
    default: false
  }
})

const Review = mongoose.model('Review', reviewSchema)
const Mobilo = mongoose.model('Mobilo', mobSchema)

const board = JSON.stringify({
  inline_keyboard: [
    [{ text: 'Пускай будет', callback_data: 'on' }, { text: 'Негоже', callback_data: 'off' }]
  ]
})

// const setVisible = (messageId) => {
//   // console.log('FUCKING JESUS!!!', messageId)
//   Review.findOneAndUpdate({ msgId: messageId }, { $set: { visible: true } }, { new: true }, (err, doc) => {
//     if(err) { console.log(err) }
//     console.log('PIDAROKKKK!!!!!', doc)
//   })
// }

const setVisible = (messageId) => {
  // console.log('FUCKING JESUS!!!', messageId)
  Review.updateOne({ msgId: messageId }, { $set: { visible: true } }, { new: true })
    .then((resp) => {
      return console.log('UPDATE VISIBILITY', resp)
    })
    .catch(console.log)
}

function setArchieved (messageId) {
  // console.log('SET_ARCHIEVED')
  Review.updateOne({ msgId: messageId }, { $set: { archieved: true } }, { new: true })
    .then((resp) => {
      return console.log('UPDATE ARCHIEVE', resp)
    })
    .catch(console.log)
}

const callbackQueryHandler = (query) => {
  if (query.data === 'on') {
    const out = query.message.message_id
    console.log('TEZZT!\n', out)
    setVisible(out)
    bot.answerCallbackQuery(query.id, { text: 'ура! меня покажут!' })
    // console.log('AFTER ANSWER', out);
  }
  if (query.data === 'off') {
    setArchieved(query.message.message_id)
    bot.answerCallbackQuery(query.id, { text: 'и никто не узнает!' })
  }
}

bot.on('polling_error', error => console.log('NO COMPRENDO, SENJOR\n', error))

bot.on('callback_query', callbackQueryHandler)

const getReviewList = () => {
  return new Promise((resolve, reject) => {
    Review.find({ visible: true, archieved: false }, (err, result) => {
      if (result) { return resolve(result) }
      if (err) { return reject(err) }
    })
  })
}

const getTelega = (data) => {
  const { author, text } = data
  // console.log('helllllooooooo!!!!', data)
  const message = `<b>имя:</b> <i>${author}</i>\n<b>отзыв:</b> ${text}`
  return new Promise((resolve, reject) => {
    bot.sendMessage(chatId, message, { parse_mode: 'HTML', reply_markup: board })
      .then((resp) => {
        return resolve(resp.message_id)
      })
      .catch(() => {
        return reject(console.error)
      })
  })
}

const postReview = (req, res) => {
  const { author, text } = req.body
  // console.log('POSTING REVIEW\n', req.body)
  getTelega({ author, text })
    .then((resp) => {
      // console.log('POSSTT', resp)
      let review = new Review({
        author: author,
        text: text,
        msgId: resp
      })
      // console.log(review)
      review.save()
        .then((resp) => {
          return res.status(200).send(resp)
        })
    })
    .catch(() => {
      return res.status(500).send(console.log)
    })
}

const postMobilo = (req, res) => {
  let mobilo = new Mobilo({
    name: req.body.name,
    phone: req.body.phone
  })
  mobilo.save()
    .then((resp) => {
      return res.status(200).send(resp)
    })
    .catch(() => {
      return res.status(500).send(console.log)
    })
}

module.exports.getReviewList = getReviewList
module.exports.postReview = postReview
module.exports.postMobilo = postMobilo
