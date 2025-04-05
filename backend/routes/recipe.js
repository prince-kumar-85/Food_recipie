const expreess = require('express');
const { getRecipes,getRecipe,deleteRecipe,editRecipe,addRecipe} = require('../controller/recipe');

const router = expreess.Router();

// const app=expreess();

router.get("/",getRecipes); //get all the recipes

router.get("/:id",getRecipe); //get a single recipe by id
router.post("/",addRecipe); //add a new recipe
router.put("/:id",editRecipe); //update a recipe by id
router.delete("/:id",deleteRecipe); //delete a recipe by id

module.exports = router;