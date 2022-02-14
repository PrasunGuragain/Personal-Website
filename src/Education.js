import React from 'react';
import './Education.css'

function Education() {
    return (
        <div className="education_all" id="Education">
            <div className="content">
                <div className='title'>
                    <h1 className="education">
                        Education
                    </h1>
                </div>
                <div className='top'>
                    <h1 className="position">
                        University of Wisconsin-Madison
                    </h1>
                </div>
                <div className='bottom'>
                    <li className="description">
                        Expected graduation: May 2023
                    </li>
                    <li className="description">
                        Relevant Coursework: Artiticial Intelligence, Computer Engineering, Programming 1/2/3, Discrete Math, Linear Algebra and Differential Equations, Calculus 1/2
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Education
