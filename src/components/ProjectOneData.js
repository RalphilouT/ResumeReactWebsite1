import { projectonereact, projectonedata2, projectonedata3 } from "../assets";

const ProjectOneData = [
    {
        leftside: "LeftSide",
        rightside: "RightSide",
        imgsrc: projectonereact,
        title: "Why React.js?",
        content: "React framework offers speed that speeds up development process. Flexibility with its modularit and offers high performance. The most important is the reusable components, I was able to reuse grid components for the education/work containers. Each containers contain different data. The flexibility comes in mind that each component can be deleted or added by adding data into a preferred data structured. Either that be a database or a json. ",
        
        
    },
    {
        leftside: "LeftSide1",
        rightside: "RightSide1",
        imgsrc: projectonedata2,
        title: "Component Reusability",
        content: "Each component can be called upon a file that renders each page to be reused. For example, each header can be called multiple times with the same configuration without hassle. Simply export the file that contains the html layout and import to the appropriate routing page. Each component can then be modified via change in data. For example, a json can multiple data that represents different schools, then using the logic of a for loop into a array, we can manipulate the component to create new section for each data.",
        
    },
    {
        leftside: "LeftSide",
        rightside: "RightSide",
        imgsrc: projectonedata3,
        title: "Responsive Website",
        content: "There are many technologies around about that you must take account of different screen sizes. This website accounts for that with the use of animation, text size, and more. With the use of techstack such as CSS, JS, HTML, etc., I have been able to manipulate the front-end with ease.",
        
    }
]

export default ProjectOneData;