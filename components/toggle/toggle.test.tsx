import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Toggle from "./toggle";

describe("Toggle", () => {
  it("renders a toggle", () => {
    render(<Toggle checked={false} onChange={() => {}} />);

    const toggle = screen.getByRole("switch");

    expect(toggle).toBeInTheDocument();
    expect(toggle).not.toBeChecked();
  });

  it("becomes active after click", () => {
    const handleChange = jest.fn();
    render(<Toggle checked={false} onChange={handleChange} />);

    const toggle = screen.getByRole("switch");

    fireEvent.click(toggle);

    expect(handleChange).toHaveBeenCalledWith(true);
  });
});
