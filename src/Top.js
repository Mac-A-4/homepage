import './Top.css';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

export default function Top() {
    return (
        <div className="Top-Outer">
            <div className="Top-Right">
                <a className="Top-Icon" href="https://github.com/Mac-A-4/">
                    <AiFillGithub/>
                </a>
                <a className="Top-Icon" href="https://www.linkedin.com/in/malcolm-alvarez-224343210/">
                    <AiFillLinkedin/>
                </a>
                <a className="Top-Icon" href="mailto:malcolm.alvarez9898@gmail.com">
                    <MdEmail/>
                </a>
            </div>
            <div className="Top-Left">
                <a className="Top-Link" href="#home">Home</a>
                <a className="Top-Link" href="#resume">Resume</a>
                <a className="Top-Link" href="#experience">Experience</a>
                <a className="Top-Link" href="#projects">Projects</a>
                <a className="Top-Link" href="/CHN-001">CHN-001</a>
            </div>
        </div>
    );
}