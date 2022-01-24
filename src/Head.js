//import React from 'react';
import './Var.css';
import './Head.css';

export default function Head() {
    return (
        <div className="Head-Outer">
            <div className="Head-Inner">
                <div className="Head-Left">
                    <span className="Head-Small-Text">
                        Hello, my name is
                    </span>
                    <br/>
                    <span className="Head-Large-Text">
                        Malcolm Alvarez
                    </span>
                    <br/>
                    <span className="Head-Small-Text">
                        I am passionate about all things programming.
                        I have been coding for over six years and I have enjoyed everything from operating system design to web design.
                        Thank you for checking out my portfolio, feel free to look around!
                    </span>
                </div>
                <nav className="Head-Right">
                    <a className="Head-Link" href="/Malcolm Alvarez Resume.pdf">
                        Resume
                    </a>
                    <a className="Head-Link" href="https://github.com/Mac-A-4/">
                        GitHub
                    </a>
                    <a className="Head-Link" href="https://www.linkedin.com/in/malcolm-alvarez-224343210/">
                        LinkedIn
                    </a>
                </nav>
            </div>
        </div>
    );
}