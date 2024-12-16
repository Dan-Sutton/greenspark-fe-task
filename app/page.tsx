"use client";
import React, { useEffect, useState } from "react";
import ProductWidget from "@/components/product-widget/product-widget";
import {
  ProductWidgetData,
  selectedColor,
} from "@/components/product-widget/product-widget-data";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

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

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-50">
      <main className="flex flex-col items-center justify-center gap-8 px-10 lg:flex-row">
        {data.length > 0 ? (
          data.map((item) => (
            <ProductWidget
              key={item.id}
              data={item}
              onChange={handleWidgetUpdate}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
}
