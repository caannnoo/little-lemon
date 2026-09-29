import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const isFormValid =
    date !== "" &&
    time !== "" &&
    guests >= 1 &&
    guests <= 10 &&
    occasion !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    submitForm(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        maxWidth: "200px",
        gap: "20px",
      }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          dispatch({ type: "UPDATE_TIMES", date: e.target.value });
        }}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!isFormValid}
      />
    </form>
  );
}

export default BookingForm;
