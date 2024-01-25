import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <div className="media">
        {project.mediaType === "image" ? (
          <img src={project.media} alt="Visual of my project." />
        ) : (
          <video autoPlay muted controls>
            <source src={project.media} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
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

export default ProjectDisplay;
