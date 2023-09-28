import Button from "../components/Button";
import EventCard from "../components/EventCard";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import "../App.scss";
import { NEW_EVENT_PATH } from "../routes/routes";

const Home = () => {
  const events = JSON.parse(localStorage.getItem("event")) || [];
  const navigate = useNavigate();

  return (
    <div className="main-container c-padding">
      <div className="event-top-container">
        <h1>Pet List</h1>
        <div className="btn-wrap">
          <Button onClick={() => navigate(NEW_EVENT_PATH)}>Add Pet</Button>
        </div>
      </div>
      <div className="events-wrap">
        {events.length > 0
          ? events.map((event) => (
              <div key={event.id}>
                <EventCard event={event} />
              </div>
            ))
          : "There are no created events yet."}
      </div>
    </div>
  );
};

export default Home;
