import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div id="navbar" className="row1">
      <Link to="/">
        <p className="section-title">Home page</p>
      </Link>

      <Link to="/products">
        <p className="section-title">View all products</p>
      </Link>

      <Link to="/login">
        <p className="section-title">Login</p>
      </Link>
    </div>
  );
};

export default Navbar;
