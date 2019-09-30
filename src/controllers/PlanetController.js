const mongoose = require("mongoose")

const Planet = mongoose.model("Planet")

module.exports = {

    async index(req, res) {
        const { page = 1} = req.query
        const planets = await Planet.paginate({}, { page, limit: 10})

        return res.json(planets)
    },

    async showId (req, res) {
        const planet = await Planet.findById(req.params.id)

        return res.json(planet)
    },

    async showName (req, res) {
        const name = req.params.name
        const planet = await Planet.find({name})

        return res.json(planet)
    },

    async store(req, res) {
        const planet = await Planet.create(req.body)

        return res.json(planet)
    }, 

    async destroy (req, res) {
        await Planet.findByIdAndRemove(req.params.id)

        return res.send()
    }
}