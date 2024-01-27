import PersonalSite from "../assets/personal_site.jpg"
import VSASite from "../assets/vsa_site.jpg";
import Nuqleous from "../assets/nuq.jpg";
import CampusNavigation from "../assets/campusnavigation.jpg";
import Capstone from "../assets/capstone.mp4#t=0.1";
import FoodMap from "../assets/foodmap.mp4#t=0.1";
import BridgeCrossing from "../assets/bridgecrossing.mp4#t=8";
import Pacman from "../assets/pacman.mp4";

export const ProjectList = [
  {
    name: "Personal Website",
    media: PersonalSite,
    mediaType: "image",
    desc: "Oh look, you're here! I created a portfolio based off of a tutorial I found online. I thoroughly enjoy learning new technologies and this was my first major step into the realm of web development and React. Through working through the tutorial, I paid close attention to the design methodology. As my skills continue to grow, I will refine this website and add more customization to match my personal flair.",
    skills: "ReactJS, HTML/CSS, NPM, Yarn, Node.js, Webapp Deployment",
    github: "https://github.com/phamofanthony/Personal-Website",
  },
  {
    name: "Organization Planning Website",
    media: VSASite,
    mediaType: "image",
    desc: "I'm greatly involved in a Vietnamese 501(c)(3) non-profit centered around leadership (discussed more in my About section) and created this website to help facilitate the planning process. It brings together the scattered resources we use and unites them in a central location where all members can access. It integrates Google Docs for meeting minutes, Google Sheets for the planning calendar, and allows users to setup action items and display them for visibility.",
    skills: "Python, Django, HTML/CSS, Google API",
    github: "",
  },
  {
    name: "Nuqleous Status Slack Bot",
    media: Nuqleous,
    mediaType: "image",
    desc: "I developed a Slack bot for Nuqleous that pulls in a variety of information from different databases and provides a succinct summaries of system health. It provides hourly summaries of data-loading progression in addition to semi-hourly summaries of current failures in Airflow that require attention. I learned a great deal from this project because it meshed together so many different technologies (API's, SQL queries, Airflow, and more).",
    skills: "Python, Slack API, Airflow API, PostgreSQL, Snowflake",
    github: "",
  },
  {
    name: "Capstone Matching Web Application",
    media: Capstone,
    mediaType: "video",
    desc: "For my final Capstone project, I worked with a team to develop a web application that streamlines the Capstone project matching process between students and sponsors. Previously, the process required numerous different portals for all the parties, presentations from the instructor, lengthy forms to fill out for students, and tens of hours of work from instructors. This web app combined all those processes into one portal, automating many of the former manual processes and allowing all the parties a straightforawrd view of what's relevant to them.",
    skills: "Python, Django, HTML/CSS, OR-Tools",
    github: "",
  },
  {
    name: "Nuqleous Automated Customer Setup",
    media: Nuqleous,
    mediaType: "image",
    desc: "At Nuqleous, the process of setting up the system for a new customer required about half an hour of manual data entry, running scripts, and navigating ancient UI's of aging applications. Utilizing a variety of API's, I created a wizard that took in all the necessary information of new customers and set them up end-to-end, autoomating all of the former processes. This saved the customer team valuable time and drastically lowered the room for error. A half hour process was lowered to about two minutes.",
    skills: "C#/.NET, Blazor, HTML/CSS, MicroStrategy API, internal API's",
    github: "",
  },
  {
    name: "AI Pacman Solver",
    media: Pacman,
    mediaType: "video",
    desc: "In my artifical intelligence class, we created an application in Python that automatically solved Pacman mazes using a variety of searching algorithms, including BFS, DFS, UCS, and A*. Depending on the algorithm, the simulation provided a score that rated how efficient the path was.",
    skills: "Python, Pygame, Searching algorithms",
    github: "",
  },
  {
    name: "Food Map Mobile Application",
    media: FoodMap,
    mediaType: "video",
    desc: "In my mobile application development class, my group created a network app based around food. In essence, users can friend each other and view on a map where all their friends ate at and detailed reviews including a star rating, description, and images of the food. It was developed specifically for Android utilizing design methodologies like MVVM and Android Room. Information was all stored in the cloud and we had secure user authentication",
    skills:
      "Kotlin, XAML, Firebase FireStore, NoSQL, Android development, Android Studio",
    github: "https://github.com/phamofanthony/Food-Map",
  },
  {
    name: "UARK Campus Navigation Program",
    media: CampusNavigation,
    mediaType: "image",
    desc: "In my algorithms course, I created this application to map out directions around campus based on various searching and sorting algorithms. Depending on the algorithm used, it would display the path on a map along with the length of that path.",
    skills: "C++, Searching algorithms, Sorting algorithms, Optimization",
    github: "",
  },
  {
    name: "Bridge Crossing Simulation",
    media: BridgeCrossing,
    mediaType: "video",
    desc: "In my operating systems class, I created a multithreaded bridge crossing simulation. A large number of vehicles would arrive at a bridge (each modeled by a thread) and according to a set list of traffic rules, the vehicles could only cross in a certain order. This project taught me key multithreading concepts like mutexes and semaphores.",
    skills: "C, Pthreads, Multithreaded development, Unix",
    github: "",
  },
];