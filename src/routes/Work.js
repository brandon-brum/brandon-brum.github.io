import {useLocation} from 'react-router-dom'

import Header from "../components/Header/Header.js"
import ProjectList from "../components/ProjectList/ProjectList.js"

import "./Work.css";

function Work() {
  return (
    <div className="Content">
      <Header/>
      <main>
        {/*<section>
          <p>Here is everything that I've done (what was to my standards, anyway):</p>
          <p>{useLocation().search.replace('?filter=','')}</p>
        </section>*/}
        <ProjectList displayCount={99} filter={useLocation().search.replace('?filter=','')}/>
      </main>
    </div>
  );
}

export default Work;