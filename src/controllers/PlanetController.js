const Planet = require("../models/Planet")
const axios = require("axios")

module.exports = {

    async index(req, res) {
        const { page = 1} = req.query;
        const planets = await Planet.paginate({}, { page, limit: 10});

        return res.json(planets);
    },

    async store(req, res) {
        let population = 0, climate = "", films = [];
        const { name } = req.body;

        const planetUsed = await Planet.findOne({ name });

        if (planetUsed) {
            return res.json(planetUsed);
        }

        const response = await axios.get(`https://swapi.co/api/planets/?search=${name}`);
        
        if(response.data.count == 1) {
            const { population: pop, climate: clima, films: filme} = response.data.results[0];
            population = pop;
            climate = clima;
            films = filme;
        } else {            
            const { population: pop, climate: clima} = req.body;
            population = pop;
            climate = clima;
        }        
        
        const planet = await Planet.create({
            name,
            population,
            climate,
            films
        });

        return res.json(planet);
    }, 

    async showId (req, res) {
        const planet = await Planet.findById(req.params.id);

        return res.json(planet);
    },

    async showName (req, res) {
        const name = req.params.name;
        const planet = await Planet.findOne({ name });

        return res.json(planet);
    },

    async destroy (req, res) {
        await Planet.findByIdAndRemove(req.params.id);

        return res.json({ ok: true });
    }
}