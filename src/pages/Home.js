import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Xin chào, my name is Anthony.</h2>
        <div className="prompt">
          <p>
            I'm a software developer who is passionate about learning and making
            valuable contributions.
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <o1 className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              Telerik, Blazor, ReactJS, HTML, CSS, NPM, MaterialUI, Yarn
            </span>
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
              Azure, Airflow, MicroStrategy, Git, Visual Studio, DbVisualizer,
              Postman, Fiddler Everywhere, Microsoft Office
            </span>
          </li>
        </o1>
      </div>
    </div>
  );
}

export default Home;
