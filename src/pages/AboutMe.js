import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/AboutMe.css";
import DotIcon from "@material-ui/icons/FiberManualRecord";

function AboutMe() {
  return (
    <div class="main">
      <div class="background">
        <h1>Background</h1>
        <p>
          I was born and raised in the small-ish town of Fort Smith, Arkansas.
          Growing up, I had a natural inclination towards technology, always
          messing around on our family computer in the living room. I'll admit,
          I was close to breaking it quite a few times, but I eventually learned
          my lesson. In my academics, I gravitated towards my STEM classes,
          lured in by their problem-solving nature. I enjoyed figuring out how
          complicated processes fit together in a large picture, much in the way
          how a physics problem often brings together multiple laws or concepts.
          Towards the end of high school, I tried my hand at my first computer
          science class and fell in love. My path in life then has since been to
          grow my skills in computer science and in general, figuring out who I
          am.
        </p>
        <p>
          To better illustrate this journey of self-discovery, how about a
          timeline?
        </p>
      </div>
      <div>
        <h1>Self-Disovery Timeline</h1>
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2020"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<DotIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Southside High School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Fort Smith, AR
            </h4>
            <p> Ranked 7/433 with a 4.321 GPA. </p>
            <p>
              <i>
                A budding mind with high hopes for the future. Shy, but
                ambitious.
              </i>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2020"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<DotIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              University of Arkansas
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Fayetteville, AR
            </h4>
            <p> Worked summer orientation, blossoming out of my  </p>
            <p>
              <i>
                A budding mind with high hopes for the future. Shy, but
                ambitious.
              </i>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <h1>Interests/Hobbies</h1>
    </div>
  );
}

export default AboutMe