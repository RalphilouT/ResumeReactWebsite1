import { Work1, Work2, Work3, Work4, Work5, Work6, api, react, spring, fetchjs
    , timeseriesanalysis, cplusplus, openGl, sqlite, php, website, aspnet,
    flask,
    NNML,
    pytorch
 } from "../../assets";
/**
 * Data set for Work Card, json form
 */
const WorkCardData = [
    {
        imgsrc: [{image: react}, {image: api}, {image: pytorch}],
        title: "Personal Website",
        content: "Using React.js, I created a modular website that lets me make as many changes as I want by simply adding new data to storage. The components on each page are iterative, and the code is reusable. For example, each card is a single code but is shown multiple times. The application uses my custom application programming interface, which provides services such as a database and a chatbot over secure lines. The code content is properly categorized and organized. The tech stack that enables modularity and scalability includes React.js, PyTorch, and an API.",
        indepthsummary: true,
        summaryLink: "/project1",
        source: "https://github.com/RalphilouT/ResumeReactWebsite1"
    },
    {
        imgsrc: [{image: flask}, {image: NNML}, {image: pytorch}],
        title: "Chatbot integrated into Resume Website",
        content: "Using PyTorch, I made a bot that responds to users by initially asking basic questions, such as about experience, jokes, greetings, and more. The training used for the bot model is the bag-of-words method. done through Flask. The API that responds to user input is built with Flask. Once the question is received, the model predicts the appropriate response via the intent logic. Other applications may use the model by communicating through the application programming interface. The user will need user authentication and user input. The program will then provide a tailored response based on the training.",
        indepthsummary: false,
        summaryLink: "/project1",
        source: "https://github.com/RalphilouT/chatbottraining"
    },
    {
        imgsrc: [{image: api}, {image: react}, {image: spring}],
        title: "Backend, Frontend, Testing",
        content: "A full-stack application that showcases the development of frontend, backend, and automated testing. The backend is powered by Spring. The frontend was in React. Multiple tech stacks are used for each part of the application: unit testing with JUnit, frontend testing with Selenium, and backend testing with REST Assured.",
        indepthsummary: true,
        summaryLink: "/project2",
        source: "https://github.com/RalphilouT/-SearchLibraryApi"
    },
    {
        imgsrc: [{image: Work3}, {image: fetchjs}, {image: react}],
        title: "Resume Website in native react",
        content: "Using React API, I can create a responsive resume website that can be adjusted by adding a new data in a storage such as a database. React.js features many advantages that other frameworks do not provide, which enhance scalability. In addition to features such as components, libraries, and more. For a more in-depth summary of this application, please tap the summary button below.",
        indepthsummary: true,
        summaryLink: "/project1",
        source: "https://github.com/RalphilouT"
    },
    {
        imgsrc: [{image: Work1}, {image: timeseriesanalysis}, {image: fetchjs}],
        title: "Sweep",
        content: "The application solves the problem of a company whose data may be lost when it is offline. This endpoint is located at a different site, away from the local measurement device. The device measures many metrics, such as voltage. These metrics are used to analyze patterns and determine solutions. Preserving the authenticity of the data is imperative.",
        indepthsummary: false,
        summaryLink: "/project1",
        source: "https://github.com/RalphilouT"
    },
    {
        imgsrc: [{image: Work2}, {image: cplusplus}, {image: openGl}],
        title: "C++ Game",
        content: "Using object-oriented properties and concepts, my team creates a game with various AIs, hit detection, a scoring system, and more. The libraries used were GLEW, GLUS, and SOIL. With these libraries, we can integrate sounds, graphics, and controls for the video game application.",
        indepthsummary: false,
        summaryLink: "/project1",
        source: "https://github.com/RalphilouT/CSE165PROJECT"
    },
    {
        imgsrc: [{image: Work4}, {image: sqlite}, {image: php}],
        title: "PHP + Database website Implementation",
        indepthsummary: false,
        summaryLink: "/project1",
        content: "Using PHP to create a frontend to display a large quantity of data from a relational database management system, I built a search engine that lets users find their favorite movies and books across various libraries around the country by efficiently leveraging data relationships and proper SQL statements. The login system tracks users in the database and all their relationships with the borrowed items in various libraries. Each user can borrow and return an item. The items in each library are limited and thoroughly updated in the search engine. In the future, I hope to have a tracker of an individual's past genre borrowed to show recommended items that the user may like.",
        
        source: "https://github.com/CSE111FinalProject/CSE111finalproject"
    },
    {
        imgsrc: [{image: Work6}, {image: spring}, {image: api}],
        title: "Spring MVC / Spring Boot API",
        content: "Using Spring Boot, I created an API that collects information via REST controller ,methods such as GET, POST, and PUT. With this foundation in place, I used the ideology to create a website using Spring MVC. The database used to store model values is MongoDB, and PostgreSQL is used through the JPA repository. Using this database through the use of both SQL statements and entities. The website uses a service layer, an API layer, and a DAO layer to implement a well-rounded, interactive website.",
        summaryLink: "/project1",
        source: "https://github.com/RalphilouT"
    },
    {
        imgsrc: [{image: Work5}, {image: website}, {image: aspnet}],
        title: "Resume Website in .NET 6, MVC",
        content: "Using ASP.NET MVC, I can create a responsive resume website that can be easily adjusted. The database that was used is MSSMS. The deployment database and setup are done in Azure. A few libraries that include email, connection, jQuery, etc.",
        indepthsummary: false,
        summaryLink: "/project1",
        source: "https://github.com/RalphilouT/WebApplicationR"
    }

]

export default WorkCardData;