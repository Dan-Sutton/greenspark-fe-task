"use client";
import React, { useState } from "react";
import ColorSelect from "./color-select/color-select";
import styles from "./color-selector.module.css";

const colors = ["blue", "green", "beige", "white", "black"] as const;

interface ColorSelectorProps {
  onChange: (color: (typeof colors)[number]) => void;
}

function ColorSelector({ onChange }: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorChange = (color: (typeof colors)[number]) => {
    setSelectedColor(color);
    if (onChange) {
      onChange(color);
    }
  };

  return (
    <div className={styles.selector}>
      {colors.map((color) => (
        <ColorSelect
          key={color}
          color={color}
          checked={selectedColor === color}
          onChange={() => handleColorChange(color)}
        />
      ))}
    </div>
  );
}

export default ColorSelector;
