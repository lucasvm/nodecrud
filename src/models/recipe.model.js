'use strict';
var dbConn = require('./../../config/db.config');
//Recipe object create
var Recipe = function(recipe){
  this.name     = recipe.name;
  this.description      = recipe.description;
  this.rating          = recipe.rating;
  this.points          = recipe.points;
  this.status         = recipe.status ? recipe.status : 1;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};
Recipe.create = function (newEmp, result) {
dbConn.query("INSERT INTO recipes set ?", newEmp, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Recipe.findById = function (id, result) {
dbConn.query("Select * from recipes where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Recipe.findAll = function (result) {
dbConn.query("Select * from recipes", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('recipes : ', res);
  result(null, res);
}
});
};
Recipe.update = function(id, recipes, result){
dbConn.query("UPDATE recipes SET name=?,description=? WHERE id = ?", [recipe.name,recipe.description, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Recipe.delete = function(id, result){
dbConn.query("DELETE FROM recipes WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Recipe;