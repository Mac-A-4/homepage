import './Experience.css';
import Section from './Section';

function Entry(props) {
    return (
        <div className="Experience-Entry-Outer">
            <div className="Experience-Entry-Top">
                <span className="Experience-Entry-Time">
                    {props.time || "undefined"}
                </span>
                <span className="Experience-Entry-Name">
                    {props.name || "undefined"}
                </span>
            </div>
            <ul className="Experience-Entry-List">
                {(props.list || []).map((x, i) => {
                    return (
                        <li key={i}>
                            {x}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default function Experience() {
    return (
        <Section title="Experience" id="experience">
            <Entry 
                time="Summer 2022" 
                name="SDE Intern, Amazon"
                list={[
                    "I have accepted my offer, and I look forward to working as an SDE Intern at Amazon in 2022!"
                ]}
            />
            <Entry 
                time="July 2021" 
                name="Section Leader, CS Bridge"
                list={[
                    "CS Bridge was a program hosted by Stanford University and Ohlone College in 2021.",
                    "As a section leader, I assisted and mentored a group of highschool students in drafting and completing programming projects."
                ]}
            />
            <Entry 
                time="2020 - 2021" 
                name="Computer Science Tutor, Ohlone College"
                list={[
                    "As a tutor in the computer science department of Ohlone College, I assisted students with their work and helped them understand the material.",
                    "I was specifically assigned to an assembly language class, though students from all computer science classes came to me for help."
                ]}
            />
            <Entry 
                time="January 2021" 
                name="Section Leader, Code Good"
                list={[
                    "Code Good was a four day event hosted by Ohlone College in 2021, it covered the basics of graph theory using Python.",
                    "As a section leader, I helped prepare materials for lectures and assisted students with material they were having difficulty understanding."
                ]}
            />
        </Section>
    );
}