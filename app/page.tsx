"use client";
import React, { useEffect, useState } from "react";
import ProductWidget from "@/components/product-widget/product-widget";
import {
  ProductWidgetData,
  selectedColor,
} from "@/components/product-widget/product-widget-data";
import useProductWidgets from "@/custom-hooks/useProductWidgets";

export default function Home() {
  const { data, handleWidgetUpdate } = useProductWidgets();

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
