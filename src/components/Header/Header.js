import "./Header.css";
import logo from "../../assets/logo.svg"
import simpleLogo from "../../assets/simpleLogo.svg"

function Header() {
    return (
        <header>
            <nav>
            <img id="mobileLogo" src={simpleLogo} alt=""/>
            <a href="./index.html">HOME</a>
            <div class="seperator"></div>
            <a href="./index.html">MY WORK</a>
            <img id="logo" src={logo} alt=""/>
            <div class="seperator"></div>
            <a href="./index.html">ABOUT</a>
            <div class="seperator"></div>
            <a href="./index.html">CONTACT</a>
            </nav>
        </header>
    );
}

export default Header;