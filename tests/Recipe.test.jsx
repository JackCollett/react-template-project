import { screen, render } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import Recipe from "../src/components/Recipe";

test("Renders with the correct title", () => {
    render(<Recipe title="Finnish cinnamon buns" type="dessert" duration={60} />);
    expect(screen.getByRole("heading")).toHaveTextContent("Finnish cinnamon buns");
});

test("Renders with the correct type", () => {
    render(<Recipe title="Finnish cinnamon buns" type="dessert" duration={60} />);
    expect(screen.getByText("dessert")).toBeInTheDocument();
});