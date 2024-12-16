"use client";
import React, { useState } from "react";
import ColorSelect from "./color-select/color-select";
import styles from "./color-selector.module.css";

function ColorSelector({ onChange }: { onChange: (color: string) => void }) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    if (onChange) {
      onChange(color);
    }
  };

  return (
    <div className={styles.selector}>
      <ColorSelect
        color="blue"
        checked={selectedColor === "blue"}
        onChange={() => handleColorChange("blue")}
      />
      <ColorSelect
        color="green"
        checked={selectedColor === "green"}
        onChange={() => handleColorChange("green")}
      />
      <ColorSelect
        color="ivory"
        checked={selectedColor === "ivory"}
        onChange={() => handleColorChange("ivory")}
      />
      <ColorSelect
        color="white"
        checked={selectedColor === "white"}
        onChange={() => handleColorChange("white")}
      />
      <ColorSelect
        color="black"
        checked={selectedColor === "black"}
        onChange={() => handleColorChange("black")}
      />
    </div>
  );
}

export default ColorSelector;
