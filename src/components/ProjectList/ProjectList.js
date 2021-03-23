import React from 'react';
import projects from "./ProjectList.json";
import './ProjectList.css';
import '../../App.css';

const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key).default));
}

importAll(require.context('../../assets/ProjectThumbnails', false));

class ProjectList extends React.Component {
    render() {
        let list = [];
        for (let i = 0 ; i < this.props.displayCount ; i++) {
            let project = projects[i];
            if (typeof(project) == "object") {
                list.push(
                    <section className='project'>
                        <div className='projectInfo'>
                            <a href={project.href} target="_blank" rel="noopener noreferrer"><h2>{project.name}</h2></a>
                            <p className='projectDescription'>{project.desc}</p>
                            <ul className='techList'>
                                {(project.tech || []).map (technology => <li>{technology}</li>)}
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
}

export default ProjectList;