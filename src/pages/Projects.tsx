import React from "react";
import ProjectItem from "../components/ProjectItem";
import { Project, ProjectList } from "../ProjectList";

function Projects() {
  return (
    <>
      <h1 className="text-center">My Personal Projects</h1>
      <div className="row">
        {ProjectList.map((project: Project) => {
          return <ProjectItem project={project} key={project.id} />;
        })}
      </div>
    </>
  );
}

export default Projects;
