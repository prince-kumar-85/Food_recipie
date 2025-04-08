import React, { useState } from 'react';

function InputForm() {
    const [email, setEmail] = useState("");   
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);

    const handleOnSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <>
    <form className='form' onSubmit={handleOnSubmit}>
        <div className="form-control">
            <label>Email</label>
            <input 
              type="email" 
              className='input' 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
        </div>
        <div className="form-control">
            <label>Password</label>
            <input 
              type="password" 
              className='input' 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
        </div>
        <button type='submit'>
          {isSignUp ? "Sign Up" : "Login"}
        </button><br />
        <p onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Already have an account?" : "Create new account"}
        </p>
    </form>      
    </>
  );
}

export default InputForm;
