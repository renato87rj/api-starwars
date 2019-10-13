const express = require("express")
const mongoose = require("mongoose")
const routes = require("./src/routes")
const cors = require("cors")

// Iniciando o App
const server = express()

// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/starwarsapi", { useNewUrlParser: true })

server.use(express.json())
server.use(cors())
server.use(routes)

server.listen("3333")