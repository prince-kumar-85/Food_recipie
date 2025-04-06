import React from 'react'
import food_recipe_1 from '../assets/food_recipe_1.jpeg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeItems from '../components/RecipeItems'


function Home() {
  return (
    <>

    <section className="home">
        <div className="left">
            <h1>Food Recipe</h1>
            <h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</h5>
            <button>Share your recipe</button>
        </div>
        <div className="right">
            <img src={food_recipe_1} width="320px" height="300px"></img>
        </div>
        </section>
        <div className='bg'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,32L20,37.3C40,43,80,53,120,69.3C160,85,200,107,240,122.7C280,139,320,149,360,144C400,139,440,117,480,106.7C520,96,560,96,600,90.7C640,85,680,75,720,58.7C760,43,800,21,840,37.3C880,53,920,107,960,144C1000,181,1040,203,1080,218.7C1120,235,1160,245,1200,213.3C1240,181,1280,107,1320,96C1360,85,1400,139,1420,165.3L1440,192L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
        </div>

        <div className='recipe'>
          <RecipeItems/>
        </div>
        
    </>
  )
}

export default Home
