
import "./App.css";
import "./Content.css"
import Header from "./components/Header/Header.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <section>
          <h1>This is article header!</h1>
          <p>We're gonna be talking about some random stuff in this article.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
