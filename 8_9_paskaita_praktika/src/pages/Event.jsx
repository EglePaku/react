import { useParams } from "react-router-dom";
import "./Event.scss";
import notFoundImg from '../assets/not-found.gif';


const Event = () => {
  const { id } = useParams();
  const events = JSON.parse(localStorage.getItem("event")) || [];
  const foundEvent = events.find((event) => event.id === +id);

  if (!foundEvent) {
    return <div className="not-found-wrap">
      <img src={notFoundImg} alt="logo" className="navigation-logo" />
      <div className="not-found">Event not found</div>
    </div>;
  }

  const { title } = foundEvent;

  return (

    <div className="c-padding">
      <h1>{title}: Health Records</h1>
    </div>
    
 
  );
};

export default Event;

