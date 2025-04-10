const Recipe = require("../models/recipe");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/images");
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const filename = Date.now() + "-" + Math.round(Math.random() * 1E9) + ext;
        cb(null, filename);
    },
});
const upload = multer({ storage: storage });

const getRecipes = async (req, res) => {
    try {
        const result = await Recipe.find();
        return res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getRecipe = async (req, res) => {
    try {
        const result = await Recipe.findById(req.params.id);
        return res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const addRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions, time } = req.body;
        const coverImage = req.file ? req.file.filename : null;

        if (!title || !instructions || !ingredients || !time || !coverImage) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const newRecipe = await Recipe.create({
            title,
            ingredients,
            instructions,
            time,
            coverImage
        });
        return res.json(newRecipe);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const editRecipe = async (req, res) => {
    const { title, ingredients, instructions, time, coverImage } = req.body;

    try {
        let recipe = await Recipe.findById(req.params.id);

        if (recipe) {
            const updatedRecipe = await Recipe.findByIdAndUpdate(
                req.params.id,
                { title, ingredients, instructions, time, coverImage },
                { new: true }
            );

            res.json(updatedRecipe);
        } else {
            res.status(404).json({ message: "Recipe not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteRecipe = (req, res) => {
    const { id } = req.params;
    Recipe.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({ message: "Recipe deleted successfully" });
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });
};

module.exports = {
    getRecipes,
    getRecipe,
    addRecipe,
    editRecipe,
    deleteRecipe,
    upload
};
