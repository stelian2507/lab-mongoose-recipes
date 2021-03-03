
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema 
  title: { type: String, required: true, unique: true },
  level: { type: String },
  ingredients: [String],
  cuisine: String,
  dishType: String,
  duration: Number,
  creator: String,
  created: { type: Date, default: new Date() }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;