import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../ProjectList'

function Projects() {
  return (
    <>
    <h1>My Personal Projects</h1>
    {ProjectList.map((project,index)=>{
        return (<ProjectItem id={index} name={project.name} image={project.image} />)
    })}
    </>
  )
}

export default Projects