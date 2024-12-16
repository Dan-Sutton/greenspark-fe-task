import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProductWidget from "./product-widget";
import { ProductWidgetData } from "./product-widget-data";

const mockData: ProductWidgetData = {
  id: 1,
  type: "plastic",
  amount: 100,
  action: "collects",
  active: true,
  linked: true,
  selectedColor: "blue",
};

describe("ProductWidget", () => {
  it("renders the ProductWidget component", () => {
    render(<ProductWidget data={mockData} onChange={() => {}} />);

    expect(screen.getByText("This product collects")).toBeInTheDocument();
    expect(screen.getByText("100 plastic bottles")).toBeInTheDocument();
  });

  it("renders the correct initial state", () => {
    render(<ProductWidget data={mockData} onChange={() => {}} />);

    const checkbox = screen.getByRole("checkbox");
    const toggle = screen.getByRole("switch");

    expect(checkbox).toBeChecked();
    expect(toggle).toBeChecked();
  });

  it("calls onChange with the correct values when checkbox is clicked", () => {
    const handleChange = jest.fn();
    render(<ProductWidget data={mockData} onChange={handleChange} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledWith(
      mockData.id,
      mockData.selectedColor,
      false,
      mockData.active
    );
  });

  it("calls onChange with the correct values when toggle is clicked", () => {
    const handleChange = jest.fn();
    render(<ProductWidget data={mockData} onChange={handleChange} />);

    const toggle = screen.getByRole("switch");
    fireEvent.click(toggle);

    expect(handleChange).toHaveBeenCalledWith(
      mockData.id,
      mockData.selectedColor,
      mockData.linked,
      false
    );
  });

  it("calls onChange with the correct values when color is changed", () => {
    const handleChange = jest.fn();
    const { container } = render(
      <ProductWidget data={mockData} onChange={handleChange} />
    );

    const colorOption = container.querySelector(".colorSelect__box--green");
    if (colorOption) {
      fireEvent.click(colorOption);
    }

    expect(handleChange).toHaveBeenCalledWith(
      mockData.id,
      "green",
      mockData.linked,
      mockData.active
    );
  });

  it("shows tooltip on hover after delay", async () => {
    render(<ProductWidget data={mockData} onChange={() => {}} />);

    const tooltipIcon = screen.getByRole("tooltip");
    fireEvent.mouseEnter(tooltipIcon);

    await waitFor(
      () => {
        expect(
          screen.getByText(
            "This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it."
          )
        ).toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  });
});
