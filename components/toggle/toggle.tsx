"use client";
import React, { useState } from "react";
import styles from "./toggle.module.css";

interface ToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function Toggle({ checked = false, onChange }: ToggleProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      onClick={handleChange}
      className={styles.toggle}
    >
      <div
        className={`${styles.toggle__slider} ${
          isChecked ? styles["toggle__slider--checked"] : ""
        }`}
      >
        <div
          className={`${styles.toggle__slider__switch} ${
            isChecked ? styles["toggle__slider__switch--checked"] : ""
          }`}
        >
          <div className={styles.toggle__slider__switch__hover}>
            <div className={styles.toggle__slider__switch__hover__center}></div>
          </div>
        </div>
      </div>
    </button>
  );
}
