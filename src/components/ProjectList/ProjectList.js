import React from 'react';
import projects from "./ProjectList.json";
import './ProjectList.css';

class ProjectList extends React.Component {
    render() {
        let list = [];
        for (let i = 0 ; i < this.props.displayCount ; i++) {
            let project = projects[i];
            if (typeof(project) == "object") {
                project.imageSrc = project.imageSrc || "Unknown.png";
                list.push(
                    <section className='project'>
                        <h2>{project.name}</h2>
                        <p>{project.desc}</p>
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