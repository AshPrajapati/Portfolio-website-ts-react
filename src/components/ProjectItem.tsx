import React from "react";
import { useNavigate } from "react-router-dom";
interface ProjectItemProps{
    image:string;
    name:string;
    id:number
}

function ProjectItem({image,name,id}:ProjectItemProps) {
  const navigate = useNavigate();
  return (
    <div>
      <img
      src={image}
      alt="project-image"
      />
      <h1> {name} </h1>
      <button onClick={() => {
        navigate("/project/" + id);
      }}>Details about Project</button>
    </div>
  );
}

export default ProjectItem;
