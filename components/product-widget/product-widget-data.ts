export interface ProductWidgetData {
  id: number;
  type: "carbon" | "plastic" | "trees";
  amount: number;
  action: "collects" | "plants" | "offsets";
  active: boolean;
  linked: boolean;
  selectedColor: selectedColor;
}

export function handleProductWidgetType(type: string) {
  switch (type) {
    case "carbon":
      return "kgs of carbon";
    case "plastic":
      return " plastic bottles";
    case "trees":
      return " trees";
    default:
      return "Unknown";
  }
}

export type selectedColor = "white" | "black" | "blue" | "green" | "beige";
