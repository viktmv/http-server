'use strict'

const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log('Example app listening on port 3000!')
})
