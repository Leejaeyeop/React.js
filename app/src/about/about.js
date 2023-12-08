import "../App.css";

function About(props) {
    console.log("renderAbout!")
    return (
        <div>
            About Component
            <div>
                {props.text}
            </div>
            <button onClick={props.func}>
                about button
            </button>
        </div>
    );
}

export default About;
