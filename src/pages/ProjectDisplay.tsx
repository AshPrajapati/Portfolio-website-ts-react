import React from 'react';
import { useParams } from "react-router-dom";
import { ProjectList } from '../ProjectList';

function ProjectDisplay() {
    const {id} = useParams();
    
    const project= ProjectList[(id?(typeof(parseInt(id)) === "number" ? +id : 0):0 )];
    return (
      <div>
        <h1> {project.name}</h1>
        <img src={project.image} />
        <p>
          <b>Skills:</b> {project.skills}
        </p>
        {/* <GitHubIcon /> */}
      </div>
    );
}

export default ProjectDisplay