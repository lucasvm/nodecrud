/** Recipe Routing */

const express = require('express')
const router = express.Router()
//we load the controller
const recipeController =   require('../controllers/recipe.controller');
// Retrieve all recipes
router.get('/', recipeController.findAll);
// Create a new recipe
router.post('/', recipeController.create);
// Retrieve a single recipe with id
router.get('/:id', recipeController.findById);
// Update a recipe with id
router.put('/:id', recipeController.update);
// Delete a recipe with id
router.delete('/:id', recipeController.delete);
module.exports = router