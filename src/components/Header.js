import { useState } from "react";

const Header = () => {

  const [btnName, setBtnName] = useState("Sign In");

    return (
      <div className="header">
        <div className="logo">
          <img className="logo-img" src={require("../../logo.jpg")} alt="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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