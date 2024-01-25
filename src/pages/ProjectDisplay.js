import React from 'react'
import {useParams} from 'react-router-dom'
import {ProjectList} from '../helpers/ProjectList'
import GitHubIcon from '@material-ui/icons/GitHub'
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
    const {id} = useParams()
    const project = ProjectList[id]
    return (
      <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image} alt="Visual of my project." />
        <p>{project.desc}</p>
        <p>
          <b>Skills:</b> {project.skills} <br />
        </p>

        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        )}
      </div>
    );
}

export default ProjectDisplay