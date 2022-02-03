import './Section.css';

export default function Section(props) {
    return (
        <div className="Section-Outer" id={props.id || ""}>
            <div className="Section-Title">
                {props.title || "undefined"}
            </div>
            <div className="Section-Inner">
                {props.children}
            </div>
        </div>
    );
}