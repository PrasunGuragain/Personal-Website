import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="experience_all" id="Experience">
      <div className="content">
        <div className="title">
          <h1 className="experience">Experience</h1>
        </div>

        <div className="first">
          <div className="top">
            <h1 className="position">
              Library Technology Services Student Assistant (Part-time)
            </h1>
            <h1 className="date">Aug 2021 - Present</h1>
          </div>
          <div className="bottom">
            <h1 className="company">at UW-Madison</h1>
            <li className="description">
              Provide customer service to library staff and patrons, including
              support and troubleshooting of staff and patron computer issues.
            </li>
          </div>
        </div>

        <div className="second">
          <div className="top">
            <h1 className="position">
              Information Technology Administrator (Part-time)
            </h1>
            <h1 className="date">Aug 2021 - Present</h1>
          </div>
          <div className="bottom">
            <h1 className="company">at UW-Madison</h1>
            <li className="description">
              Working at the Hasler Laboratory of Limnology to perform regular
              maintenance on Windows servers and websites hosted on Linux
              server, and troubleshoot various
            </li>
            <p className="IT_description">
              problems related to both Apple and Windows computers reported by
              the users.
            </p>
          </div>
        </div>

        <div className="third">
          <div className="top">
            <h1 className="position">Software Development Intern</h1>
            <h1 className="date">May 2021 - Aug 2021</h1>
          </div>
          <div className="bottom">
            <h1 className="company">
              at National Institute of Standards and Technology
            </h1>
            <li className="description">
              Summer Undergraduate Research Fellowship program.
            </li>
            <li className="description">
              Worked in the Engineering Laboratory on a Software Development
              project.
            </li>
            <li className="description">
              Implemented a web-based software using C# and HTML in Visual
              Studio for investigating and evaluating data tampering.
            </li>
          </div>
        </div>
      </div>

      <div className="br_btn">
        <a href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-up-fill white"
          viewBox="0 0 16 16"
        >
          <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
        </svg>
        </a>
      </div>
    </div>
  );
}
