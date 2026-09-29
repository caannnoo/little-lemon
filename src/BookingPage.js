import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./Main";

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  return (
    <main>
      <h1>Reserve a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}

export default BookingPage;
