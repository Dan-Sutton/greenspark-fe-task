"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./product-widget.module.css";
import Checkbox from "../checkbox/checkbox";
import ColorSelector from "../color-selector/color-selector";
import Toggle from "../toggle/toggle";
import {
  handleProductWidgetType,
  ProductWidgetData,
  selectedColor,
} from "./product-widget-data";
import Tooltip from "../tooltip/tooltip";

interface ProductWidgetProps {
  data: ProductWidgetData;
  onChange: (
    updatedWidgetId: number,
    selectedColor: selectedColor,
    linked: boolean,
    active: boolean
  ) => void;
}

function ProductWidget({ data, onChange }: ProductWidgetProps) {
  const handleChange = (
    property: keyof ProductWidgetData,
    value: any
  ): void => {
    onChange(
      data.id,
      property === "selectedColor" ? value : data.selectedColor,
      property === "linked" ? value : data.linked,
      property === "active" ? value : data.active
    );
  };

  return (
    <div className={styles.product}>
      <div
        className={`${styles.product__header} ${
          styles[`product__header--${data.selectedColor}`]
        }`}
      >
        {data.selectedColor === "white" || data.selectedColor === "beige" ? (
          <Image
            src={"/greenspark-logo-green.svg"}
            alt={"Greenspark Logo"}
            width={39.7}
            height={45.41}
            className={styles.product__header__logo}
          />
        ) : (
          <Image
            src={"/greenspark-logo.svg"}
            alt={"Greenspark Logo"}
            width={39.7}
            height={45.41}
            className={styles.product__header__logo}
          />
        )}
        <div className={styles.product__header__info}>
          <p className={styles.product__header__info__this_product}>
            This product {data.action}
          </p>
          <h2 className={styles.product__header__info__status}>
            {data.amount}
            {handleProductWidgetType(data.type)}
          </h2>
        </div>
      </div>

      <div className={styles.product__controls}>
        <span className={styles.product__controls__control}>
          <label>
            Link to public Profile
            <Tooltip
              message="This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it."
              iconSrc="/info_outline_icon.svg"
              iconAlt="Tooltip icon"
              linkLabel="View Public Profile"
              link="/"
            />
          </label>
          <Checkbox
            checked={data.linked}
            onChange={(checked) => handleChange("linked", checked)}
          />
        </span>
        <span className={styles.product__controls__control}>
          <label>Badge colour</label>
          <ColorSelector
            onChange={(color) => handleChange("selectedColor", color)}
          />
        </span>
        <span className={styles.product__controls__control}>
          <label>Activate badge</label>
          <Toggle
            checked={data.active}
            onChange={(checked) => handleChange("active", checked)}
          />
        </span>
      </div>
    </div>
  );
}

export default ProductWidget;
