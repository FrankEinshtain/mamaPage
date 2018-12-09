const express = require('express')
// const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const { postMobilo, postReview, getReviewList } = require('./servLib/gooseTelegue')
const app = express()
const port = 8000
const path = require('path')

app.use(express.static(__dirname))
app.use(express.static(path.join('__dirname', '/build')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.listen(port, () => {
  console.log('We are New now. Still live on ' + port)
})

app.get('/', (req, res) => {
  res.sendFile(path.join('__dirname', '/build/index.html'))
})

app.get('/reviews', (req, res) => {
  getReviewList()
    .then((data) => {
      return res.status(200).send(data)
    })
    .catch((err) => {
      return console.error('ERROR getting review list!', err)
    })
})

app.post('/addReview', postReview)

app.post('/addMobilo', postMobilo)
