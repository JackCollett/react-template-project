// file: src/Counter.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./components/Counter";

test("renders with initial value of 0 ", () => {
  // Setup
  render(<Counter />);

  // Assert
  expect(screen.getByRole("heading")).toHaveTextContent("0");
});

test("renders with a new value of 2 ", async () => {
  // Setup
  render(<Counter />);

  const user = userEvent.setup();
  // Act - click the button twice
  await userEvent.click(screen.getByText("Increment the counter"));
  await userEvent.click(screen.getByText("Increment the counter"));

  // Assert
  expect(screen.getByRole("heading")).toHaveTextContent("2");
});

test("renders with a new value of 2 ", async () => {
    // Setup
    render(<Counter />);
  
    const user = userEvent.setup();
    // Act - click the button twice
    await userEvent.click(screen.getByText("Increment the counter"));
    await userEvent.click(screen.getByText("Increment the counter"));
    await userEvent.click(screen.getByText("Decrement the counter"));
  
    // Assert
    expect(screen.getByRole("heading")).toHaveTextContent("1");
  });