import { useState, useEffect } from "react";
import { Link } from "react-router";

const Header = () => {

  const [btnName, setBtnName] = useState("Sign In");

  //if no dependency array is passed, useEffect will be called on every render
  //if an empty array is passed, useEffect will be called only once
  //if a variable is passed, useEffect will be called whenever that variable changes
  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);

    return (
      <div className="header">
        <div className="logo">
          <img className="logo-img" src={require("../../logo.jpg")} alt="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            <button className="login" onClick={() => {
              btnName === "Sign In" ? setBtnName("Sign Out") : setBtnName("Sign In");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    );
};

export default Header;