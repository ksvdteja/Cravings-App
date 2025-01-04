import { useState, useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {

  const [btnName, setBtnName] = useState("Sign In");

  const onlineStatus = useOnlineStatus();

  //if no dependency array is passed, useEffect will be called on every render
  //if an empty array is passed, useEffect will be called only once
  //if a variable is passed, useEffect will be called whenever that variable changes
  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);

    return (
      <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
        <div className="logo">
          <img className="w-40" src={require("../../logo.jpg")} alt="logo" />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4 ">
            <li className="px-4">
              Online Status: {onlineStatus ? "🟢" : "🔴"}
            </li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4">Cart</li>
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