import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ media, mediaType, name, id }) {
  const navigate = useNavigate();

  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/projects/" + id);
      }}
    >
      <div className="contentWrapper">
        {mediaType === "image" ? (
          <img src={media} alt={name} className="bgImage" />
        ) : (
          <video autoPlay muted className="bgImage">
            <source src={media} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default ProjectItem;
