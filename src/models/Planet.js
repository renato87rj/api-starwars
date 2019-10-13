const { Schema, model} = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const PlanetSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    population: {
        type: String, 
        require: true
    },
    climate: {
        type: String,
        require: true 
    },
    films: [{
        type: String
    }],
    createdAt: {
        type: Date, 
        default: Date.now
    }
})

PlanetSchema.plugin(mongoosePaginate)
module.exports = model("Planet", PlanetSchema)