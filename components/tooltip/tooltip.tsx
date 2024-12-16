import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./tooltip.module.css";
import Link from "next/link";

interface TooltipProps {
  message: string;
  iconSrc: string;
  iconAlt: string;
  linkLabel: string;
  link: string;
}

function Tooltip({ message, iconSrc, iconAlt, linkLabel, link }: TooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleTooltipVisibility = (visible: boolean) => {
    setTimeout(() => {
      setShowTooltip(visible);
    }, 300);
  };

  return (
    <div
      className={styles.tooltip}
      onMouseEnter={() => handleTooltipVisibility(true)}
      onMouseLeave={() => handleTooltipVisibility(false)}
    >
      <button
        type="button"
        role="tooltip"
        aria-label={iconAlt}
        className={styles.tooltip__button}
      >
        <Image
          src={iconSrc}
          alt={iconAlt}
          height={12}
          width={12}
          className={styles.tooltip__icon}
        />
      </button>
      {showTooltip && (
        <div className={styles.tooltip__content}>
          <p>{message}</p>
          <Link href={link}>{linkLabel}</Link>
        </div>
      )}
    </div>
  );
}

export default Tooltip;
