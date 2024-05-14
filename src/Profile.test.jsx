

import { render, screen } from "@testing-library/react";
import Profile from "./components/Profile";

test("renders with the correct title ", () => {
  // Setup - rendering the component on the page
  render(<Profile name="Quackie Makers" job="Maker's favourite rubber duck" birthdate={2013}/>);

  // Assert
  expect(screen.getByRole("heading")).toHaveTextContent("Quackie Makers");
});

test("renders with the correct job", () => {
  // Setup - rendering the component on the page
  render(<Profile name="Quackie Makers" job="Maker's favourite rubber duck" birthdate={2013}/>);

  // Assert
  expect(screen.getByText("Maker's favourite rubber duck")).toBeInTheDocument();
});

test("renders with the correct date", () => {
  // Setup - rendering the component on the page
  render(<Profile name="Quackie Makers" job="Maker's favourite rubber duck" birthdate={2013}/>);

  // Assert
  expect(screen.getByText(String(2013))).toBeInTheDocument();
});