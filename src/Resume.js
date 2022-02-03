import './Resume.css';
import Section from './Section';
import {AiFillFilePdf} from 'react-icons/ai';


export default function Resume() {
    return (
        <Section title="Resume" id="resume">
            <a className="Resume-Icon" href="/Malcolm Alvarez Resume.pdf">
                <AiFillFilePdf/>
            </a>
            (Click to View)
        </Section>
    );
}