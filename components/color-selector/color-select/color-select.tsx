"use client";
import React from "react";
import styles from "./color-select.module.css";
import { selectedColor } from "@/components/product-widget/product-widget-data";

interface ColorSelectProps {
  checked?: boolean;
  onChange?: () => void;
  color?: selectedColor;
}

export default function ColorSelect({
  checked = false,
  onChange,
  color = "blue",
}: ColorSelectProps) {
  return (
    <label className={styles.colorSelect}>
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        aria-checked={checked}
        aria-label={`Color ${color}`}
        className={styles.colorSelect__input}
      />
      <span
        className={`${styles.colorSelect__box} ${
          checked ? styles["colorSelect__box--checked"] : ""
        } ${styles[`colorSelect__box--${color}`]}`}
      ></span>
    </label>
  );
}
