import React from 'react'
import { useLoaderData } from 'react-router-dom'
import foodImg from '../assets/food_recipe_1.jpeg'
import { FaHeart } from "react-icons/fa";
import { BsFillStopwatchFill } from "react-icons/bs";


function RecipeItems() {
    const allRecipes = useLoaderData()
    console.log(allRecipes)
    return (
        <>
            <div className='card-container'>
                {
                    allRecipes?.map((item,index) => {
                        return (
                            <div key={index} className='card'>
                                <img src={foodImg} width="120" height="100px" ></img>
                                <div className='card-body'>
                                    <div className='title'>{item.title}</div>
                                    <div className='icons'>
                                        <div className='timer'>
                                            <BsFillStopwatchFill />50min
                                            </div>
                                            <FaHeart/>
                                         </div>
                                </div>
                            </div>
                            
                        
                        )
                })
            }
            </div>
        </>
    )
}

export default RecipeItems
