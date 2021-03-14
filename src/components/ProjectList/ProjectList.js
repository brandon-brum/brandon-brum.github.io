import React from 'react';
import projects from "./ProjectList.json";
import './ProjectList.css';

const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key).default));
}

importAll(require.context('../../assets/ProjectThumbnails', false))


class ProjectList extends React.Component {
    render() {
        let list = [];
        for (let i = 0 ; i < this.props.displayCount ; i++) {
            let project = projects[i];
            if (typeof(project) == "object") {
                project.imageSrc = project.imageSrc || "Unknown.png";
                list.push(
                    <section className='project'>
                        <div className='projectInfo'>
                            <h2>{project.name}</h2>
                            <p>{project.desc}</p>
                        </div>
                        <img className='ProjectThumbnail' src={cache[`./${project.imageSrc}`]}/> 
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