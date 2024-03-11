import "./Projects.css";

function Projects(){
    return(
        <>
            <div className="project">
                <h4 className="title">Projects to showcase Javascript skills</h4>
                <p>
                    I have developed and am hosting a few of my projects that I used practice my Javascript skills while learning.
                    Following are the active urls:
                </p>
                <ul className="link">
                    <li> <a href="https://rohannaidu97.github.io/Dice-Game/"> Dice-Game </a> </li>
                    <li> <a href="https://rohannaidu97.github.io/Drum-Kit/"> Drum-Kit </a> </li>
                    <li>  <a href="https://rohannaidu97.github.io/Simon-Game/"> Simon-Game </a> </li>
                </ul>
            </div>
            
            <div className="project">
                <h4>RiseUp (Django using Python)</h4>
                <p>
                    Developed a web application that helps you to set a daily schedule by creating a to-do list, to make a list of
                    books you need to read and to set some monthly goals for you to cross off once you achieve them. RiseUp
                    helps you track your progress.
                </p>
            </div>
        </>
    );
    
}

export default Projects;
