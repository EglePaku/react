import PropTypes from "prop-types";
import { Link, generatePath } from "react-router-dom";
import { EVENT_PATH } from "../routes/routes";
import "./EventCard.scss";

const EventCard = ({ event }) => {
  const { id, title, startingDate, clientEmail } =
    event;

  return (

      <div className="card-container">
         
        <h3 className="card-date">
          {title}
        </h3>
        <p className="card-date">
          {startingDate}
        </p>
        <p className="card-date">
          {clientEmail}
        </p>
        <div className="btn-card-wrap">

        <Link className="button" to={generatePath(EVENT_PATH, { id })}>
          View Log
        </Link>

          <button className="btn-outline">Delete</button>
        </div>
    </div>

  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    startingDate: PropTypes.string.isRequired,
    clientEmail: PropTypes.string.isRequired,
  }),
};

export default EventCard;
