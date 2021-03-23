import {Link} from 'react-router-dom'

import Header from "../components/Header/Header.js"
import ProjectList from "../components/ProjectList/ProjectList.js"

import "./Home.css";

function Home() {
  return (
    <div className="Content">
      <Header/>
      <main>
        <section>
          <h1>Welcome to my website!</h1>
          <p>Below you can see some of the cool stuff I've worked on, if you want to see all of it, click <Link to="/work">here</Link>.</p>
        </section>
        <ProjectList displayCount={4}/>
      </main>
    </div>
  );
}

export default Home;