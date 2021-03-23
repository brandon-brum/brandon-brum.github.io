import React from 'react';
import {Link} from 'react-router-dom'

import projectJSON from "./ProjectList.json";
import './ProjectList.css';
import '../../index.css';

// Some "learning by example" from Webpack's docs:
const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key).default));
}

importAll(require.context('../../assets/ProjectThumbnails', false));

class ProjectList extends React.Component {
    render() {
        let list = [];
        let projects = projectJSON
        if (typeof this.props.filter !== "undefined" && this.props.filter !== "") {
            projects = projectJSON.filter(project => project.tech.includes(this.props.filter))
        }
        for (let i = 0 ; i < this.props.displayCount ; i++) {
            let project = projects[i];
            if (typeof project == "object") {
                list.push(
                    <section className='project' key={project.name}>
                        <div className='projectInfo'>
                            <a href={project.href} target="_blank" rel="noopener noreferrer"><h2>{project.name}</h2></a>
                            <p className='projectDescription'>{project.desc}</p>
                            <ul className='techList'>
                                {(project.tech || []).map(technology => <li key={technology}><Link to={`/work?filter=${technology}`}>{technology}</Link></li>)}
                            </ul>
                        </div>
                        <img className='ProjectThumbnail' src={cache[`./${project.imageSrc || "Unknown.png"}`]} alt={project.alt || ''}/> 
                    </section>);
            } else
                break;
        }
        return (
            <ul className='projectList'>{list}</ul>
        );
    }
};

export default ProjectList;