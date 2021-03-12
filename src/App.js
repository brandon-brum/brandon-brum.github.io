
import "./App.css";
import Header from "./components/Header/Header.js";
import selfPortrait from "./assets/portrait.jpg";
import transitionShape from "./assets/transitionShape.svg"
import logo from "./assets/logo.svg"

function App() {
  return (
    <div className="App">
      <header>
        
        <nav>
          <a>HOME</a>
          <div class='seperator'></div>
          <a>MY WORK</a>
          <img id="logo" src={logo}/>
          <a>ABOUT</a>
          <div class='seperator'></div>
          <a>CONTACT</a>
        </nav>
      </header>
    </div>
  );
}

export default App;
