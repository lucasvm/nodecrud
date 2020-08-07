/** Recipe Controller */
/** This a custom APP FOR TEST */
'use strict';
//Load Model
const Recipe = require('../models/recipe.model');
exports.findAll = function(req, res) {
    Recipe.findAll(function(err, recipe) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', recipe);
  res.send(recipe);
});
};
exports.create = function(req, res) {
const new_recipe = new Recipe(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
    Recipe.create(new_recipe, function(err, recipe) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Recipe added successfully!",data:recipe});
});
}
};

//Search
exports.findById = function(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
  if (err)
  res.send(err);
  res.json(recipe);
});
};

//Update
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Recipe.update(req.params.id, new Recipe(req.body), function(err, recipe) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Recipe successfully updated' });
});
}
};

//Delete
exports.delete = function(req, res) {
Recipe.delete( req.params.id, function(err, recipe) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Recipe successfully deleted' });
});
};