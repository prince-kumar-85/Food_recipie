import React,{ useState } from "react"; 
import Model from "./Model";
import InputForm from "./InputForm";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const checkLogin = () => {
    setIsOpen(true);
  }

  return (
    <>
    <header>
        <h2>Food Blog</h2>
        <ul>
          <li>Home</li>    
          <li>my Recipe</li>
          <li>Favourite</li>
          <li onClick={checkLogin}>Login</li>
        </ul>
    </header>
    {(isOpen) && <Model onClose={()=>setIsOpen(false)}><InputForm/></Model>}
      
    </>
  )
}

export default Navbar
