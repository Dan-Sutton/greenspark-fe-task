"use client";
import React, { useState } from "react";
import styles from "./checkbox.module.css";
import Image from "next/image";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export function Checkbox({ checked = false, onChange }: CheckboxProps) {
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
        className={`${styles.checkbox__box} ${isChecked ? styles.checked : ""}`}
      >
        <Image
          className={`${styles.checkbox__tick} ${
            isChecked ? styles.visible : ""
          }`}
          src="/tick.svg"
          alt="tick"
          width={16}
          height={16}
        />
      </span>
    </label>
  );
}
