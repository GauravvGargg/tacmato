
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 


  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", { email, password });
      localStorage.setItem("username", res.data.username);
      setIsLoggedIn(true);
      navigate("/home");
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  const handleCancel = () => {
    navigate("/"); 
  };

  return (
    <nav className="container d-flex flex-column justify-content-center align-items-center vh-100">
    <nav className="mb-4 text-center">

    <a className="navbar-brand" href="#">
      <img
        src="vite.svg"
        width="70"
        height="70"
        className=" mb-2"
        alt="logo"
      />
      <h1>
      Tacmato
      </h1>
    
    </a>
  </nav>
  <div className="container d-flex flex-column justify-content-center align-items-center vh-100">

    <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <p>
            <input type="email"  placeholder="Email" onChange={(e) => setEmail(e.target.value)}
              required
            />
            </p>
          </div>
          <div className="mb-3">
                      <label className="form-label">Password</label>
                      <p>
            <input type="password" placeholder="Password"   onChange={(e) => setPassword(e.target.value)}
              required />
              </p>
          </div>
          
          <div className="d-flex justify-content-between">

          <button type="submit" className="btn btn-primary w-50">
            Login
          </button>
          <button type="button" className="btn btn-secondary w-50 ms-2" onClick={handleCancel}>
              Cancel
            </button>
            </div>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <a href="/Register ">Sign up</a>
        </p>
      </div>
      
    </div>
    </nav>
  );
        
};

export default Login;
