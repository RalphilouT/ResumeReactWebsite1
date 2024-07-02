import "./style.css";

const EducationCard = (props) => {
  
  return <div className="cards">
    <div className="SchoolLogo">
      
      <img src={props.logosrc} alt="Logo"></img>
    </div>
  <a href={props.Website}>
    {props.title}
  </a>
  <p className="GPA">{props.GPA}</p>
  <p className="City">{props.City}</p>
  <p className="Diploma">{props.Diploma}</p>
  <p className="AboutSection">{props.Content}</p>
  
</div>
};

export default EducationCard;
