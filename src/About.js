import './Var.css';
import './About.css';

export default function About() {
    return (
        <div id="about" className="About-Outer">
            <div className="About-Inner">
                <div className="About-Title">
                    About
                </div>
                <div className="About-Body">
                    <img className="About-Photo" alt="Profile" src="/Profile Photo.jpg"/>
                    Hello! I'm Malcolm.
                    <br/><br/>
                    I'm currently studying for my bachelor's degree in computer science at UC Davis, and I'm projected to graduate in early 2023.
                    <br/><br/>
                    My main interests are software engineering and fullstack web development.
                    I am proficient in C, C++, Java, Python, JavaScript, and Go.
                    <br/><br/>
                    If you're interested in looking at my projects, you can check out my
                    &nbsp;<a href="https://github.com/Mac-A-4">GitHub</a>&nbsp;
                    profile.
                </div>
            </div>
        </div>
    );
}