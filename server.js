var express = require('express')
var path = require('path')

var app = express()

app.use(express.static(__dirname))

var PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('listening to this joint on port', PORT)
})
