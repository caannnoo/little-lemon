import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./Main";

test("Renders the Choose date label", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={() => {}}
      submitForm={() => {}}
    />,
  );

  const labelElement = screen.getByText("Choose date");

  expect(labelElement).toBeInTheDocument();
});

test("initializeTimes returns available times", () => {
  const times = initializeTimes();

  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

test("updateTimes returns available times for the selected date", () => {
  const state = [];
  const action = {
    type: "UPDATE_TIMES",
    date: "2026-09-29",
  };

  const newState = updateTimes(state, action);

  expect(Array.isArray(newState)).toBe(true);
  expect(newState.length).toBeGreaterThan(0);
});
