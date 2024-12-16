import "@testing-library/jest-dom";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Home from "./page";
import { ProductWidgetData } from "@/components/product-widget/product-widget-data";

// Mock fetch response
const mockData: ProductWidgetData[] = [
  {
    id: 1,
    type: "carbon",
    amount: 2,
    action: "offsets",
    active: false,
    linked: false,
    selectedColor: "green",
  },
  {
    id: 2,
    type: "trees",
    amount: 15,
    action: "plants",
    active: false,
    linked: true,
    selectedColor: "black",
  },
  {
    id: 3,
    type: "plastic",
    amount: 300,
    action: "collects",
    active: true,
    linked: true,
    selectedColor: "beige",
  },
];

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  ) as jest.Mock;
});

afterAll(() => {
  jest.resetAllMocks();
});

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  ) as jest.Mock;
});

afterAll(() => {
  jest.resetAllMocks();
});

describe("Home", () => {
  it("renders Home component and fetches data", async () => {
    const { container } = render(<Home />);

    // Check if loading text is displayed initially
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // Wait for the data to be fetched and rendered
    await waitFor(() => {
      const productWidgets = container.querySelectorAll(".product");
      expect(productWidgets).toHaveLength(3);
    });

    // Check if the ProductWidget components are rendered with the correct data
    expect(screen.getByText("This product offsets")).toBeInTheDocument();
    expect(screen.getByText("This product plants")).toBeInTheDocument();
    expect(screen.getByText("This product collects")).toBeInTheDocument();
    expect(screen.getByText("2kgs of carbon")).toBeInTheDocument();
    expect(screen.getByText("15 trees")).toBeInTheDocument();
    expect(screen.getByText("300 plastic bottles")).toBeInTheDocument();
  });

  it("renders Home component with data from local storage", async () => {
    localStorage.setItem("product-widgets-data", JSON.stringify(mockData));
    const { container } = render(<Home />);

    // Wait for the data to be fetched and rendered
    await waitFor(() => {
      const productWidgets = container.querySelectorAll(".product");
      expect(productWidgets).toHaveLength(3);
    });

    // Check if the ProductWidget components are rendered with the correct data
    expect(screen.getByText("This product offsets")).toBeInTheDocument();
    expect(screen.getByText("This product plants")).toBeInTheDocument();
    expect(screen.getByText("This product collects")).toBeInTheDocument();
    expect(screen.getByText("2kgs of carbon")).toBeInTheDocument();
    expect(screen.getByText("15 trees")).toBeInTheDocument();
    expect(screen.getByText("300 plastic bottles")).toBeInTheDocument();
  });
});
