import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div>
          <p>
            <h2>Howdy, I'm Anthony.</h2>
          </p>
        </div>
        <div className="prompt">
          <p>
            I'm a software developer who is passionate about growing his skills
            and making valuable contributions to teams.
          </p>
        </div>
        <div className="prompt">
          <a href="https://www.linkedin.com/in/phamofanthony/">
            <LinkedInIcon />
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://github.com/phamofanthony">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <o1 className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>Telerik, Blazor, ReactJS, HTML, CSS, NPM, Yarn</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Django, .NET, NodeJS, SQL Server, Exasol, Snowflake, PostgreSQL,
              NoSQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Python, C#, C++, C, Java, Kotlin, JavaScript, SQL</span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>
              Azure, Airflow, Git, Visual Studio, DbVisualizer, Postman, Fiddler
              Everywhere, MicroStrategy, Microsoft Office
            </span>
          </li>
        </o1>
      </div>
    </div>
  );
}

export default Home;
