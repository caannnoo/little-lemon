import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./Main";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "./api";

function BookingPage() {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  return (
    <main>
      <h1>Reserve a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default BookingPage;
