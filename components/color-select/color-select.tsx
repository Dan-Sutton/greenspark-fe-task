"use client";
import React, { useState } from "react";
import styles from "./color-select.module.css";

interface ColorSelectProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  color?: "blue" | "green" | "ivory" | "black" | "white";
}

export default function ColorSelect({
  checked = false,
  onChange,
  color = "blue",
}: ColorSelectProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        aria-checked={isChecked}
        aria-label="Checkbox"
        className={styles.checkbox__input}
      />
      <span
        className={`${styles.checkbox__box} ${
          isChecked ? styles["checkbox__box--checked"] : ""
        } ${styles[`checkbox__box--${color}`]}`}
      ></span>
    </label>
  );
}
