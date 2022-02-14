import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects" id="Projects">
      <div className="title">
        <h1 className="title">Projects</h1>
        <p className="title">Self/group projects</p>
      </div>

      <div className="content">
        <div className="row">
          <div className="col">
            <div className="sections pointer">
              <div className="projects_meta">
                  <h1 className="text">
                      Personal website
                  </h1>
                  <p className="text">
                      My portfolio
                  </p>
                  <p className="text">
                      Used: React, JS, and CSS
                  </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="sections">
              <div className="projects_meta">
                  <h1 className="text">
                      Contact Manager App
                  </h1>
                  <p className="text">
                      Project with a colleague
                  </p>
                  <p className="text">
                    A simple Blazor
                  </p>
                  <p className="text">
                    server-side CRUD app.
                  </p>
                  <p className="text">
                      Used: MudBlazor, MediatR
                  </p>
                  <p className="text">
                      AutoMapper, HTML, and C#
                  </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="sections">
              <div className="projects_meta">
                  <h1 className="text">
                      Ball Run
                  </h1>
                  <p className="text">
                      Game development
                  </p>
                  <p className="text">
                      Used: Unity 3D game engine, C#
                  </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="sections">
              <div className="projects_meta">
                  <h1 className="text">
                      Java Graphic User Interface
                  </h1>
                  <p className="text">
                    A group project for the purpose
                  </p>
                  <p className="text">
                    of data visualization using Eclipse.
                  </p>
                  <p className="text">
                      Used: Java
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
