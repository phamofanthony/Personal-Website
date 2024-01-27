import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ media, mediaType, name, id }) {
  const navigate = useNavigate();

  useEffect(() => {
    const video = document.getElementById(`video-${id}`);
    if (video) {
      video.addEventListener("loadedmetadata", function () {
        this.currentTime = 0;
        this.pause();
      });
    }
  }, [id]);

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
          <video
            id={`video-${id}`}
            className="bgImage"
            preload="metadata"
          >
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
