import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../ProjectList";

function ProjectDisplay() {
  const { id } = useParams();
  const indexOfProject = id
    ? typeof parseInt(id) === "number"
      ? parseInt(id)
      : 1
    : 1;
  const project = ProjectList[indexOfProject - 1];
  return (
    <div className="text-center">
      <h1> {project.name}</h1>
      <img src={project.image} alt="Error in Displaying" />
      <p className="text-black-90">
        <b>Skills: </b>
        {project.skills.map((skill: string, index: number) => (
          <span
            className="badge bg-white text-black-50 mx-2"
            style={{ fontSize: "small" }}
            key={index}
          >
            {skill}
          </span>
        ))}
      </p>
      {/* <GitHubIcon /> */}
    </div>
  );
}

export default ProjectDisplay;
