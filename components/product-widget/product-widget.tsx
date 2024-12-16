"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./product-widget.module.css";
import Checkbox from "../checkbox/checkbox";
import ColorSelector from "../color-selector/color-selector";
import Toggle from "../toggle/toggle";

function ProductWidget() {
  const [selectedColor, setSelectedColor] = useState("blue");

  const handleColorChange = (color: string): void => {
    setSelectedColor(color);
    console.log("Color changed to", color);
  };

  return (
    <div className={styles.product}>
      <div
        className={`${styles.product__header} ${
          styles[`product__header--${selectedColor}`]
        }`}
      >
        <Image
          src={"/greenspark-logo.svg"}
          alt={"Greenspark Logo"}
          width={39.7}
          height={45.41}
          className={styles.product__header__logo}
        />
        <div className={styles.product__header__info}>
          <p className={styles.product__header__info__this_product}>
            This product collects
          </p>
          <h2 className={styles.product__header__info__status}>
            100 plastic bottles
          </h2>
        </div>
      </div>

      <div className={styles.product__controls}>
        <span className={styles.product__controls__control}>
          <label>Link to public Profile</label>
          <Checkbox />
        </span>

        <span className={styles.product__controls__control}>
          <label>Badge colour</label>
          <ColorSelector onChange={handleColorChange} />
        </span>

        <span className={styles.product__controls__control}>
          <label>Activate badge</label>
          <Toggle />
        </span>
      </div>
    </div>
  );
}

export default ProductWidget;
