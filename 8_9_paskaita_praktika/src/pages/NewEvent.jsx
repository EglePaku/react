import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { HOME_PATH } from "../routes/routes";
import "./NewEvent.scss";

const NewEvent = () => {
  const [title, setTitle] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [clientEmail, setClientEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      title,
      startingDate,
      clientEmail
    };
    const events = JSON.parse(localStorage.getItem("event")) || [];
    localStorage.setItem("event", JSON.stringify([...events, newEvent]));

    navigate(HOME_PATH);
  };

  return (


    <form onSubmit={handleSubmit} className="form">
      <h1>Add Pet</h1>

      <label htmlFor="title">Pet Name:</label>

      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Pet name..."
        required
      />


      <label htmlFor="startingDate">Date of Birth:</label>

      <div className="form-dates">

        <Input
          type="date"
          value={startingDate}
          onChange={(e) => setStartingDate(e.target.value)}
        />
      </div>

      <label htmlFor="clientEmail">Your email:</label>

      <div className="form-dates">

        <Input
          type="email"
          value={clientEmail}
          onChange={(e) => setClientEmail(e.target.value)}
        />
      </div>

      <Button>Add new Pet</Button>
    </form>
  );
};

export default NewEvent;
