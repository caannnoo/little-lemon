import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./Main";

test("Renders the Choose date label", () => {
  render(<BookingForm />);

  const labelElement = screen.getByText("Choose date");

  expect(labelElement).toBeInTheDocument();
});

test("initializeTimes returns the correct available times", () => {
  const times = initializeTimes();

  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

test("updateTimes returns the same state", () => {
  const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const newState = updateTimes(state, { type: "UPDATE_TIMES" });

  expect(newState).toEqual(state);
});
