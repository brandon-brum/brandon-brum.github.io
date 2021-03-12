import "./Header.css";
import logo from "../../assets/logo.svg"
import simpleLogo from "../../assets/simpleLogo.svg"

function Header() {
    return (
        <header>
            <nav>
            <img id="mobileLogo" src={simpleLogo}/>
            <a>HOME</a>
            <div class='seperator'></div>
            <a>MY WORK</a>
            <img id="logo" src={logo}/>
            <div class='seperator'></div>
            <a>ABOUT</a>
            <div class='seperator'></div>
            <a>CONTACT</a>
            </nav>
        </header>
    );
}

export default Header;