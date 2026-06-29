import { projectonereact, projectonedata2, projectonedata3 } from "../../assets";

const ProjectOneData = [
    {
        leftside: "LeftSide",
        rightside: "RightSide",
        imgsrc: projectonereact,
        title: "Why React.js?",
        content: "The React framework offers speed that speeds up the development process. Flexibility with its modularity offers high performance. The most important thing is the reusable components; I was able to reuse grid components for the education/work containers. Each container contains different data. The flexibility comes to mind with each component, which can be deleted or added by updating a preferred data structure. Either that be a database or a JSON.",
        
        
    },
    {
        leftside: "LeftSide1",
        rightside: "RightSide1",
        imgsrc: projectonedata2,
        title: "Component Reusability",
        content: "Each component can be called upon a file that renders each page to be reused. For example, each header can be called multiple times with the same configuration without hassle. Simply export the file containing the HTML layout and import it into the appropriate routing page. Each component can then be modified by changing the data. For example, a JSON file can contain multiple data points representing different schools. If we use a for loop over an array, we can iterate over its elements to create a new section for each data point.",
        
    },
    {
        leftside: "LeftSide",
        rightside: "RightSide",
        imgsrc: projectonedata3,
        title: "Responsive Website",
        content: "There are many technologies to take into account for different screen sizes. This website accounts for that through animation, text size, and more. Using tech stacks such as CSS, JS, and HTML, I have been able to manipulate the front end with ease.",
        
    }
]

export default ProjectOneData;