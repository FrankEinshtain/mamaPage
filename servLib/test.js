
function funcCb (data, cb) {
  if (!cb || typeof cb !== 'function') return console.error('pidor')
  setTimeout(() => {
    if (data > 10) return cb({ success: false })
    return cb({ success: true })
  }, 1000)
  return false
}

function funcPromise (data) {
  return new Promise((resolve, reject) => {
    funcCb(data, result => {
      if (result.success) return resolve('ura~')
      return reject('faaaiiiilll')
    })
  })
}

funcPromise(12)
  .then(console.log)
  .catch(console.error)

// электро 70
// газ
// вода 42
// сдпт 55
