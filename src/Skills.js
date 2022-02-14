import React from 'react';
import './Skills.css';

function Skills() {
    return (
        <div className="skills" id="Skills">
            <div className="title">
                <h1 className="title">Skills</h1>
            </div>

            <div className="content">
                <div className="row">
                    <div className="col">
                        <div className="skills_box">
                            <div className="skills_content">
                                <h5 className="skills_text">Programming Languages:</h5>
                                <ul className="list">
                                    <li className="items">Python</li>
                                    <li className="items">JavaScript</li>
                                    <li className="items">CSS</li>
                                    <li className="items">Java</li>
                                    <li className="items">C</li>
                                    <li className="items">C#</li>
                                    <li className="items">C++</li>
                                    <li className="items">HTML</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="skills_box">
                            <div className="skills_content">
                                <h5 className="skills_text">Softwares:</h5>
                                <ul className="list">
                                    <li className="items">PyCharm</li>
                                    <li className="items">Blazor</li>
                                    <li className="items">Visual Studio</li>
                                    <li className="items">VS Code</li>
                                    <li className="items">GitHub</li>
                                    <li className="items">JIRA</li>
                                    <li className="items">Eclipse</li>
                                    <li className="items">Unity</li>
                                    <li className="items">QtSpim</li>
                                    <li className="items">Terminal</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="skills_box">
                            <div className="skills_content">
                                <h5 className="skills_text">Soft Skills:</h5>
                                <ul className="list">
                                    <li className="items">Strong
                                        <li className="items">Problem-solving</li>
                                        <li className="items">Interpersonal communication</li>
                                        <li className="items">Time management</li>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
