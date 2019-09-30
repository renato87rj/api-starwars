const express = require("express")
const routes = express.Router()

const PlanetController = require("./controllers/PlanetController")

routes.get("/planets", PlanetController.index)
routes.get("/planets/id/:id", PlanetController.showId)
routes.get("/planets/name/:name", PlanetController.showName)
routes.post("/planets", PlanetController.store)
routes.delete("/planets/:id", PlanetController.destroy)

module.exports = routes
