const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const PlanetSchema = new mongoose.Schema({
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
    createdAt: {
        type: Date, 
        default: Date.now
    }
})

PlanetSchema.plugin(mongoosePaginate)
mongoose.model("Planet", PlanetSchema)