const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// ITERATION 1
const recipeSchema = new Schema({
      title: String,
      level: { type: String, enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]},
      ingredients: [ String ],
      cuisine: String,
      dishType: { type: String, enum: ["breakfast", "main-course", "soup", "snack", "drink", "dessert",  "other" ] },
      image: { type: String, default: 'https://images.media-allrecipes.com/images/75131.jpg'},
      duration: {type: Number, min: 0},
      creator: String,
      created: {type: Date, default: 'today'}
});


const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
