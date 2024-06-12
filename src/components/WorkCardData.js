import Work1 from "../assets/Work1.png"
import Work2 from "../assets/Work2.png";
import Work3 from "../assets/Work3.png";
import Work4 from "../assets/Work4.png";
import Work5 from "../assets/Work5.png";
import Work6 from "../assets/Work6.png";
import Work7 from "../assets/api.png"
/**
 * Data set for Work Card, json form
 */
const WorkCardData = [
    {
        imgsrc: Work7,
        title: "Backend, Frontend, Testing",
        content: "Project involving backend, frontend, and automated testing. The backend is powered by spring. The frontend was in React. The testing used were for unit testing via junit package, the frontend testing via selenium, and the backend testing via rest assured.",
        indepthsummary: true,
        summaryLink: "/project2",
        source: "https://github.com/RalphilouT/-SearchLibraryApi"
    },
    {
        imgsrc: Work3,
        title: "Resume Website in native react",
        content: "Using React API, I can create a responsive resume website that can be adjusted easily. React.js features many advantages that other frameworks do not provide. Features such as components, libraries, and more. For a more in-depth summary of this application, please tap the summary button below.",
        indepthsummary: true,
        summaryLink: "/project1",
        source: "https://github.com/RalphilouT"
    },
    {
        imgsrc: Work1,
        title: "Sweep",
        content: "The application solves the problem of a company that their data may be lost in cases where an endpoint is offline. This endpoint is located at another site away from the local measurement device. The device measures many metrics such as voltage. These metrics are used to analyze patterns and determine solutions.",
        indepthsummary: false,
        summaryLink: "/project1",
        source: "https://github.com/RalphilouT"
    },
    {
        imgsrc: Work2,
        title: "C++ Game",
        content: "Using object-oriented properties and concepts, my team creates a game that includes various AIs, hit detection, a scoring system, and more. The libraries that were used were GLEW, GLUS, and SOIL. With these libraries, we can integrate sounds, graphics, and controls for the video game application.",
        indepthsummary: false,
        summaryLink: "/project1",
        source: "https://github.com/RalphilouT/CSE165PROJECT"
    },
    {
        imgsrc: Work4,
        title: "PHP + Database website Implementation",
        indepthsummary: false,
        summaryLink: "/project1",
        content: "Using PHP integration of database manipulation, I was able to create a search engine for users to use to find their favorite movies and books in various libraries around the country. The login system tracks users in the database and all of its relation to their borrowed items in various libraries. Each user can borrow and return an item. The items in each library are limited and thoroughly updated in the search engine. In the future, I hope to have a tracker of an individual's past genre borrowed to show recommended items that the user may like.",
        
        source: "https://github.com/CSE111FinalProject/CSE111finalproject"
    },
    {
        imgsrc: Work6,
        title: "Spring MVC / Spring Boot API",
        content: "Using spring boot, I created an API that collects information through the use of rest controller requests such as get, post, update, etc. With this foundation in place, I used the idealogy to create a website using Spring MVC. Database that is used to store model values is MongoDB and PostgreSQL through the use of the JPA repository. Using this database through the use of both SQL statement and entity. The website uses a service layer, API layer, and dao layer to implement a well-rounded interactive website.",
        indepthsummary: false,
        summaryLink: "/project1",
        source: "https://github.com/RalphilouT"
    },
    {
        imgsrc: Work5,
        title: "Resume Website in .NET 6, MVC",
        content: "Using asp.net mvc, I am able to create a responsive resume website that can be adjusted in a simple manner. Database that was used is MSSMS. The deployment database and set up is done in azure. A bit of libraries that functions the email, connection, jquery, etc.",
        indepthsummary: false,
        summaryLink: "/project1",
        source: "https://github.com/RalphilouT/WebApplicationR"
    }
]

export default WorkCardData;