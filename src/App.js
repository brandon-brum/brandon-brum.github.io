
import "./App.css";
import "./Content.css"
import Header from "./components/Header/Header.js"
import ProjectList from "./components/ProjectList/ProjectList.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <section>
          <h1>Welcome to my website!</h1>
          <p>Below you can see some of the cool stuff I've worked on, if you want to see all of it, click <a href="index.html">here</a>.</p>
        </section>
        <ProjectList displayCount={4}/>
      </main>
    </div>
  );
}

export default App;
