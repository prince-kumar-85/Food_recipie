import React from 'react'
import { useLoaderData } from 'react-router-dom'

function RecipeItems() {
    const allRecipes = useLoaderData()
    console.log(allRecipes)
    return (
        <div>
            <div>reciwdhfi</div>
        </div>
    )
}

export default RecipeItems
