
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const Register = () => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const handleRegister = async () => {
      await axios.post("http://localhost:5000/register", { username, email, password });
      localStorage.setItem("username", username);
      setIsLoggedIn(true);
      navigate("/home");
    };
  
    const handleCancel = () => {
      navigate("/"); 
    };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
    <div className="mb-4 text-center">
      <img 
        src="vite.svg" 
        alt="logo" 
        width="70" 
        height="70" 
        className="mb-2" 
      />
      <h1>Tacmato</h1>
    </div>
  
     
 
    <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">SIGN UP</h3>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            
            <label className="form-label">Username</label>
           <p>
            <input type="username" placeholder="UserName" onChange={(e) => setusername(e.target.value)}  />
           </p>
            </div>
          
            <div className="mb-3">
              
            <label className="form-label">Email</label>
<p>
<input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
</p>
</div>
<div className="mb-3">
  
  <label className="form-label">Password</label>
  <p>
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
</p>
      </div>
      <div className="d-flex justify-content-between">

          <button type="submit" className="btn btn-primary w-50">
            SIGN UP
          </button>
          <button type="button" className="btn btn-secondary w-50 ms-2" onClick={handleCancel}>
              Cancel
            </button>
            </div>
        </form>
        
        <p className="text-center mt-3">
        You have already account? <Link to="/login">Login</Link>
        </p>

          </div>
          </div>
      

          
  )
}

export default Register;
