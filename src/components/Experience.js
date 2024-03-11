import "./Experience.css";


function Experience(){
    return(
        <>
    <div className="experience">
        <title> Amodcs </title>
        <p className="years-active"> 03/2022 - Present </p>
        <p className="job-title"> Software Developer </p>
        <p className="description"> 
            Working under Europe based Telecom Client providing assistance in the billing area of the application.
            Implementing necessary enhancements in React, Vanilla Javascript and other scripting languages. Managing
            the backend of the same application to support the upgrading process. 
        </p>
    </div>

    <div className="experience">
        <title> Cognizant Technology Solutions </title>
        <p className="years-active"> 09/2020 - 03/2022 </p>
        <p className="job-title"> Programmer Analyst </p>
        <p className="description"> 
            Developed a user-based dashboard for the client with the team, then provided enhancement using Angular and
            MVC.NET, which contained all the employee records, project information along with an innovation tab which
            allowed every employee to submit their own ideas for improvement.
            Worked under one of the biggest US-based health care client. Made sure client application runs without
            downtime, which included maintaining the servers, interacting with users to solve their queries and resolving
            any anomalies with UI.
        </p>
    </div>

    <div className="experience">
        <title> Cognizant Technology Solutions </title>
        <p className="years-active"> 12/2019 - 04/2020 </p>
        <p className="job-title"> Technical Intern </p>
        <p className="description"> 
            Trained under MVC.NET framework using C# with help of which developed a web application GETFit, that gets
            you to your fitness goals. It can assist you with getting to the top fitness blogs and valuable diet charts.
        </p>
    </div>

    
    </>
    );
    
}

export default Experience;
