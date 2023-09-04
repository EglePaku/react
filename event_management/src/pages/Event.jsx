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

  const { imageUrl, title, startingDate, endingDate, description } = foundEvent;

  return (
    <div className="event">
      <img src={imageUrl} alt={title} className="event-img" />
      <div className="event-content">
        <p className="event-date">
          {startingDate} - {endingDate}
        </p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Event;
