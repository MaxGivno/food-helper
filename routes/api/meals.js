const express = require('express')
const router = express.Router()

// Item Model
const Meal = require('../../models/Meal')

// @route   GET api/meals
// @desc    Get All Meals
// @access  Public
router.get('/', (req, res) => {
    Meal.find()
        .sort({ dateModified: -1 })
        .then(meals => res.json(meals))
})

// @route   GET api/meals/:id
// @desc    Get Meal with Id
// @access  Public
router.get('/:id', (req, res) => {
    Meal.findById(req.params.id)
        .then(meal => res.json(meal))
        .catch(err => res.status(404).json({ msg: `Not found: ${err}` }))
})

// @route   POST api/meals
// @desc    Create a Meal
// @access  Public
router.post('/', (req, res) => {
    const src = req.body

    let ingNames = src.filter((item) => item[0].startsWith("strIngre"));
    let ingMeasures = src.filter((item) => item[0].startsWith("strMeasur"));
    let ingredients = ingNames.map((ingName, i) => ({ ingredient: ingName, measure: ingMeasures[i] }))

    const newMeal = new Meal({
        _id: src.idMeal,
        name: src.strMeal,
        drinkAlternate: src.strDrinkAlternate,
        category: src.strCategory,
        area: src.strArea,
        instructions: src.strInstructions,
        imageUrl: src.strMealThumb,
        tags: src.strTags ? src.strTags.split(', ') : src.strTags,
        youtubeUrl: src.strYoutube,
        ingredients: ingredients,
        sourceUrl: src.strSource,
        dateModified: src.dateModified
    })

    newMeal.save()
        .then(meal => res.json(meal))
})

// @route   DELETE api/meals/:id
// @desc    Delete a Meal
// @access  Public
router.delete('/:id', (req, res) => {
    Meal.findById(req.params.id).then(
        meal => meal.remove().then(() => res.json({ success: true }))
    ).catch(err => res.status(404).json({ success: false }))
})

module.exports = router