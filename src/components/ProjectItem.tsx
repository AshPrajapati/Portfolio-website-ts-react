import React from "react";
import { useNavigate } from "react-router-dom";
import { Project } from "../ProjectList";
interface ProjectItemProps {
  project: Project;
}

function ProjectItem({ project }: ProjectItemProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/project/" + project.id);
  };
  return (
    <div className="col ma1">
      <div className="card">
        <img
          className="card-img-top grow"
          src={project.image}
          alt="Error in Displaying"
          onClick={handleClick}
          role="button"
        />
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <button className="btn btn-primary" onClick={handleClick}>
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
