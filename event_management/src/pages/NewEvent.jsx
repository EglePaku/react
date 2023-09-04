import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Button from "../components/Button";
import { HOME_PATH } from "../routes/routes";
import "./NewEvent.scss";

const NewEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [attendanceeCount, setAttendanceeCount] = useState(0);
  const [foodCount, setFoodCount] = useState(0);
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      title,
      description,
      imageUrl,
      attendanceeCount,
      foodCount,
      startingDate,
      endingDate,
    };
    const events = JSON.parse(localStorage.getItem("event")) || [];
    localStorage.setItem("event", JSON.stringify([...events, newEvent]));

    navigate(HOME_PATH);
  };

  return (


    <form onSubmit={handleSubmit} className="form">
      <h1>Start now! 🐱</h1>

      <label htmlFor="title">Title:</label>

      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title..."
        required
      />
      <label htmlFor="description">Description:</label>

      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description..."
        required
      />
      <label htmlFor="imageUrl">Image:</label>

      <Input
        type="url"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image url..."
        required
      />
      <label htmlFor="attendanceeCount">Attendance Count:</label>
      <Input
        type="number"
        value={attendanceeCount}
        onChange={(e) => setAttendanceeCount(+e.target.value)}
        placeholder="Count..."
      />
      <label htmlFor="foodCount">Food Count:</label>
      <Input
        type="number"
        value={foodCount}
        onChange={(e) => setFoodCount(+e.target.value)}
        placeholder="Count..."
      />
      <label htmlFor="startingDate">Date:</label>

      <div className="form-dates">

        <Input
          type="date"
          value={startingDate}
          onChange={(e) => setStartingDate(e.target.value)}
        />
        <Input
          type="date"
          value={endingDate}
          onChange={(e) => setEndingDate(e.target.value)}
        />
      </div>

      <Button>Add new event</Button>
    </form>
  );
};

export default NewEvent;
