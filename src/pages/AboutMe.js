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
          my lesson.
        </p>
        <p>
          In my academics, I gravitated towards my STEM classes, lured in by
          their problem-solving nature. I enjoyed figuring out how complicated
          processes fit together in a large picture, much in the way how a
          physics problem often brings together multiple laws or concepts.
          Towards the end of high school, I tried my hand at my first computer
          science class and fell in love. My path in life then has since been to
          grow my skills in computer science and in general, figuring out who I
          am. Along this journey, I found myself in increasingly higher
          leadership roles.
        </p>
        <p>
          To better illustrate this journey of leadership, how about a timeline?
        </p>
      </div>
      <div>
        <h1>Leadership Timeline</h1>
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Summer of Freshman Year"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<DotIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              UARK Orientation Leader
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Fayetteville, AR
            </h4>
            <p>
              I broke out of my shell through working for about two months
              straight to help facilitate the orientation process, growing close
              to the 37 other orientation leaders. Through facilitating small
              group circles and leading tours, I began embracing my extroverted
              side.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sophomore Year"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<DotIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Vietnamese Student Association (VSA) Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Local VSA</h4>
            <p>
              I became involved in the Vietnamese Student Association (VSA)
              organization on campus, where I became an intern. As part of the
              intern group, I was in charge of planning semesterly events for
              the organization, culminating in a canned food drive that raised
              over $600 of goods and a cultural board game night.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Junior Year"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<DotIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Internal Vice President
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Local VSA</h4>
            <p>
              With the leadership growth I had as an intern, I ran for the role
              of internal vice president and won. I was in charge of the new
              class of interns and from my guidance, they hosted a field day
              event and an end of year banquet. It was heartwarming to see the
              tight-knit community we made.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Junior Year"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<DotIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Summit XI Logistics Committee
            </h3>
            <h4 className="vertical-timeline-element-subtitle">UVSA South</h4>
            <p>
              Our VSA is apart of a larger network of VSA's in Arkansas, Texas,
              and Oklahoma called UVSA South, a 501(c)(3) non-profit. They host
              an annual leadership conference called Summit (pulling in over 200
              attendees) which I staffed for as a logistics committee member. I
              helped facilitate matters like scheduling events, tracking
              walkie-talkies, facilitating transitions, and more.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Summer of Junior Year"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<DotIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Camp Legacy VIII Programming Committee
            </h3>
            <h4 className="vertical-timeline-element-subtitle">UVSA South</h4>
            <p>
              Within UVSA South, I also staffed for Camp Legacy, a leadership
              retreat that takes place at a campsite. As a programming committee
              member, I was in charge of opening/closing ceremonies, emotional
              activities to brign people together, and planning leadership
              panels and activities.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Senior Year"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<DotIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Arkansas VSA Co-President
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Local VSA</h4>
            <p>
              With my abundance of leadership experience in the VSA community, I
              ran to be a co-president with my close friend. As co-presidents,
              we're in charge of leading all the meetings and managing the
              15-person officer team to crank out high quality events. One of
              the most important skills I've learned is the importance of
              maintaining a high-level view over everything to see the big
              image. With everything going on, it was important not to tunnel
              vision on individual events.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Senior Year"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<DotIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Information Technology Cabinet Staff
            </h3>
            <h4 className="vertical-timeline-element-subtitle">UVSA South</h4>
            <p>
              I joined the year-long IT cabinet team for UVSA South. Here, I
              help manage the Wordpress website and create registration portals
              for all the events.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Senior Year"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<DotIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Summit XII Logistics Committee
            </h3>
            <h4 className="vertical-timeline-element-subtitle">UVSA South</h4>
            <p>
              I rejoined the logistics committee for the next Summit, hoping to
              bring my prior experience to elevate the team further.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <div class="hobbies">
        <h1>Interests/Hobbies</h1>
        <p>
          Between work, school, and my involvement in VSA's, I'm almost always
          at my computer, meaning any chance I get, I like to step away. In my free-time, I love to play volleyball (both sand
          and indoor), pickleball, and table tennis. I also enjoy travelling and
          cooking new foods. When I happen to have some spare change lying around, I enjoy
          tinkering with custom mechanical keyboards and building/modding them.
        </p>
      </div>
    </div>
  );
}

export default AboutMe