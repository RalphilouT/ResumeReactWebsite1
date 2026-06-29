import { api, api2, api3 } from "../../assets"

const ProjectTwoData = [
    {
        leftside: "LeftSide",
        rightside: "RightSide",
        imgsrc: api,
        title: "React Framework",
        content: "React lets me use various packages, such as Axios, to communicate with the API. This will be the source of information for the library's search engine, such as books and movies. It also allows me to use JavaScript scripts.",
        source: "https://github.com/RalphilouT/SearchLibraryWeb"
        
    },
    {
        leftside: "LeftSide1",
        rightside: "RightSide1",
        imgsrc: api2,
        title: "Backend API",
        content: "This backend serves as my communication layer for the storage application and is accessed via npm packages such as axios. The API provides security via an API key that protects communication between the user and the API. This API was done through Spring, enabling me to use various dependencies.",
        source: "https://github.com/RalphilouT/-SearchLibraryApi"
    },
    {
        leftside: "LeftSide",
        rightside: "RightSide",
        imgsrc: api3,
        title: "Testing",
        content: "Using the page object model, I can create a design pattern in Selenium that defines an object representing all web elements, which can be reused for each test case. I also used REST Assured to test communication between the user and the backend, ensuring it emits a proper response that is displayed to users. For basic method testing, I used JUnit to compare outputs.",
        source: "https://github.com/RalphilouT/librarytest"
    }
]

export default ProjectTwoData;