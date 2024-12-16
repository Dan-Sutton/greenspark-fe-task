import { useState, useEffect } from "react";
import {
  ProductWidgetData,
  selectedColor,
} from "@/components/product-widget/product-widget-data";

const useProductWidgets = () => {
  const [data, setData] = useState<ProductWidgetData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets"
        );
        const data = await response.json();
        localStorage.setItem("product-widgets-data", JSON.stringify(data));
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const storedData = localStorage.getItem("product-widgets-data");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      fetchData();
    }
  }, []);

  const handleWidgetUpdate = (
    updatedWidgetId: number,
    selectedColor: selectedColor,
    linked: boolean,
    active: boolean
  ) => {
    const updatedData = data.map((item: ProductWidgetData) => {
      if (item.id === updatedWidgetId) {
        return {
          ...item,
          selectedColor,
          linked,
          active,
        };
      }
      return item;
    });

    setData(updatedData);
    localStorage.setItem("product-widgets-data", JSON.stringify(updatedData));
  };

  return { data, handleWidgetUpdate };
};

export default useProductWidgets;
