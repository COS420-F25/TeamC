import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ModeToggle } from "./modeToggle";

test("shows Light Mode when value is false", () => {
  render(<ModeToggle value={false} onChange={() => {}} />);

  // Look for the Light Mode text
  const text = screen.getByText("Light Mode");

  expect(text).toBeInTheDocument();
});

test("shows Dark Mode when value is true", () => {
  render(<ModeToggle value={true} onChange={() => {}} />);

  const text = screen.getByText("Dark Mode");

  expect(text).toBeInTheDocument();
});

test("checkbox should be checked when value is true", () => {
  render(<ModeToggle value={true} onChange={() => {}} />);

  const checkbox = screen.getByRole("checkbox");

  expect(checkbox.checked).toBe(true);
});

test("checkbox should be unchecked when value is false", () => {
  render(<ModeToggle value={false} onChange={() => {}} />);

  const checkbox = screen.getByRole("checkbox");

  expect(checkbox.checked).toBe(false);
});

test("calls onChange when checkbox is clicked", () => {
  const handleChange = jest.fn();

  render(<ModeToggle value={false} onChange={handleChange} />);

  const checkbox = screen.getByRole("checkbox");

  // simulate clicking checkbox
  fireEvent.click(checkbox);

  // expect onChange to be called with true (checked)
  expect(handleChange).toHaveBeenCalledWith(true);
});