const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MealSchema = new Schema({
    _id: String,
    name: String,
    drinkAlternate: String,
    category: String,
    area: String,
    instructions: String,
    imageUrl: String,
    tags: [String],
    youtubeUrl: String,
    ingredients: [{ ingredient: String, measure: String }],
    sourceUrl: String,
    dateModified: Date
})

module.exports = Meal = mongoose.model('meal', MealSchema)