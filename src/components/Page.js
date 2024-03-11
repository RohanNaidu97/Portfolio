import "./Page.css";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";

function Page(){
    return(
    <div className="container">
        <h1>Rohan Naidu</h1>
        <div className="contact">
            <h4>Phone - +91 789-867-8194</h4>
            <h4>Email - rohannaidu1210@gmail.com</h4>
        </div>

        <h2>Experience</h2>
        <Experience />

        <h2>Projects</h2>
        <Projects />

        <h2>Education</h2>
        <Education />

        <h2>Skills</h2>
        <Skills />

    </div>
    );
    
}

export default Page;
