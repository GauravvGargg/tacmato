import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <section className="topBarSection d-flex align-items-center justify-content-between p-3 bg-light w-100">
      <div className="navbar-brand d-flex align-items-center">
        <img src="vite.svg" width="50" height="50" alt="logo" />
        <h3 className="mb-0">Tacmato</h3>
      </div>

      <nav className="navbar navbar-expand-lg ">
       
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/chains">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productmenu">PRODUCT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">CONTACT</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>

      <div className="userAuth">
        <Link className="btn btn-primary" to="/Login">Login/Sign up</Link>
      </div>
    </section>
  );
};

export default TopBar;
