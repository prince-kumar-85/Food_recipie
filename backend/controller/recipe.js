const Recipe = require("../models/recipe");
const getRecipes= async(req,res)=>{ // get all the recipes from the database..............
    const result= await Recipe.find();
    return res.json(result);
}
const getRecipe=async(req,res)=>{  // get a single recipe by id..............    here do want you want to do like if u wnat to find it by id or by title or by ingredients or by instructions or by time or by coverImage
    const result=await Recipe.findById(req.params.id)
    return res.json(result);
}
const addRecipe=async(req,res)=>{
    const {title,ingredients,instructions, time , coverImage}=req.body

    if(!title || !instructions || !ingredients || !time ){
        return res.status(400).json({ message: "Please fill all the fields" });
    }

    const newRecipe=await Recipe.create({
        title,
        ingredients,
        instructions,
        time,
        coverImage
    })
    return res.json(newRecipe); 
    // if(!newRecipe){
    //     return res.status(400).json({ message: "Failed to create recipe" });
    // }
    // return res.status(201).json({ message: "Recipe created successfully" });
}
const editRecipe = async (req, res) => {
    const { title, ingredients, instructions, time, coverImage } = req.body;

    try {
        let recipe = await Recipe.findById(req.params.id);

        if (recipe) {
            const updatedRecipe = await Recipe.findByIdAndUpdate(
                req.params.id,
                { title, ingredients, instructions, time, coverImage },
                { new: true } // return the updated document
            );

            res.json(updatedRecipe);
        } else {
            res.status(404).json({ message: "Recipe not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteRecipe=(req,res)=>{
    res.json({ message: "Welcome to the recipe controller!" });
}

module.exports={
    getRecipes,
    getRecipe,
    addRecipe,
    editRecipe,
    deleteRecipe
}