import React from "react";
import "./Home.css";
import my_logo from "./img/my_logo.png";
export default function Home() {
  window.addEventListener("scroll", function () {
    document
      .querySelector(".header")
      .classList.toggle("active", window.scrollY > 0);
  });

  return (
    <div className="home" id="Home">
      <div className="home_background">
        <div className="header">
          <div className="my_logo">
            <img src={my_logo} alt="" />
          </div>
          <div className="topbar">
            <ul className="bar">
              <a href="#Home">
                <li className="items">Home</li>
              </a>
              <a href="#Experience">
                <li className="items">Experience</li>
              </a>
              <a href="#Education">
                <li className="items">Education</li>
              </a>
              <a href="#Projects">
                <li className="items">Projects</li>
              </a>
              <a href="#Skills">
                <li className="items">Skills</li>
              </a>
              <a href="#Contact">
                <li className="items">Contact</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="container"></div>
        <div className="content">
          <div className="text">
            <h1 className="hi">Hey, I'm Prasun!</h1>
            <h1 className="about">
              Computer Science Student at University of Wisconsin-Madison
            </h1>
            <h1 className="summary">
              Hard-working student with a passion for Software Engineering and
              AI. Keen to work with a team and enjoy helping others. Excellent
              track records on academics, community services, and multicultural
              exposure.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
