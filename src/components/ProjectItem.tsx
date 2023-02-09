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
    <div className="col-sm-3 mx-1 my-1">
      <div
        className="card"
        style={{
          height: "250px",
        }}
      >
        <img
          className="card-img-top"
          src={project.image}
          alt="Error in Displaying"
          onClick={handleClick}
          role="button"
          style={{
            height: "60%",
            objectFit: "cover",
          }}
        />
        <div
          className="card-body"
          style={{
            height: "40%",
          }}
        >
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
