const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

function naitaTest(req, res) {
  res.render('pages/test.ejs')
}

let ylesanded = [
  {
    kirjeldus: "Jaluta koera",
    tehtud: true
  },
  {
    kirjeldus: "Sööda kassi",
    tehtud: false
  },
  {
    kirjeldus: "Homikusöök",
    tehtud: false
  }
]

function naitaYlesandeid(req, res) {
  res.render('pages/ylesanded.ejs', { ylesanded: ylesanded })
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', naitaYlesandeid)
  .get('/proov', naitaTest)
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
