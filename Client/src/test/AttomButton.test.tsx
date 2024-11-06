import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AtomButton } from "@/components";

describe("AtomButton", () => {
  test("renders the button with the correct label", () => {
    render(<AtomButton label="Click me" />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<AtomButton label="Click me" onClick={handleClick} />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("displays the spinner when isLoading is true", () => {
    render(<AtomButton label="Click me" isLoading />);
    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
  });

  test("displays the label when isLoading is false", () => {
    render(<AtomButton label="Click me" isLoading={false} />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
