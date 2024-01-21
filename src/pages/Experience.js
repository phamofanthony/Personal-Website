import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Graduated May 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Southside High School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Fort Smith, AR</h4>
          <p> Ranked 7/433 with a 4.321 GPA. </p>
          <p>
            <i>
              A budding mind with high hopes for the future. Shy, but ambitious.
            </i>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Summer 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Orientation Leader - University of Arkansas
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Fayetteville, AR
          </h4>
          <p>
            Worked closely with the 37 other orientation leaders to facilitate
            the transition of over 5,000 incoming students into the university
            across the span of a month. Greeted and guided families around
            campus to create a sense of welcomeness, led small group circles
            with students to foster more intimate discussions, and performed
            humorous skits with other orientation leaders to facilitate
            discussions about the nuances of campus life
          </p>
          <p>
            <i>
              The hermit experienced a metamorphosis into a social creature.
            </i>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer Intern - Nuqleous
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bentonville, AR
          </h4>
          <p>
            Started on the operations team and expanded dataloading processes in
            SQL/C#, created monitoring scripts in SQL, created analytics metrics
            in MicroStrategy, and worked bi-weekly on-call weekends. 
          </p>
          <p>
            Then shifted to the data engineering side, where I further automated the
            many manual processes I had done in the operations team. Developed a
            slackbot in Python that accessed several API's and databases to
            report monitoring statistics.
          </p>
          <p>
            <i>The young traveller sets his foot in corporate America.</i>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Graduation Expected May 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Arkansas
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Fayetteville, AR
          </h4>

          <p>
            Will graduate with an honors B.S. in computer science, holding a 4.0
            GPA.
          </p>
          <p>
            <i>Free at last. Right?</i>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
