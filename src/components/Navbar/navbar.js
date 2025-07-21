import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.jpg" // Adjust the path as necessary
import contact from "../../assets/contact.png"; // Adjust the path as necessary
import { Link } from "react-scroll"; // Assuming you're using react-router for navigation

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">Client</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contact} alt="" className="desktopMenuImg" />Contact Me</button>
        </nav>
    )
}

export default Navbar;