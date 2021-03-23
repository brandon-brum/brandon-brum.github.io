import {Link} from "react-router-dom";

import "./Header.css";
import logo from "../../assets/logo.svg"
import simpleLogo from "../../assets/simpleLogo.svg"

function Header() {
    return (
        <header>
            <nav>
            <img id="mobileLogo" src={simpleLogo} alt=""/>
            <Link to="/">HOME</Link>
            <div className="seperator"></div>
            <Link to="/work">MY WORK</Link>
            <img id="logo" src={logo} alt=""/>
            <div className="seperator"></div>
            <Link to="/about">ABOUT</Link>
            <div className="seperator"></div>
            <Link to="/contact">CONTACT</Link>
            </nav>
        </header>
    );
}

export default Header;