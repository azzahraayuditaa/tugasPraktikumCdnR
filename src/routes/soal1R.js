const express = require('express')
const app = express()
const bodyParser = require("body-parser") 

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const soal1 = require ('../controllers/soal1C')

app.post("/balok", soal1.balok)
app.post("/kubus", soal1.kubus)
app.post("/tabung", soal1.tabung)
app.post("/bola", soal1.bola)

module.exports = app