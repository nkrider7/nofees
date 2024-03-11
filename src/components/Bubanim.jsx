import React from "react";
import styles from "./bubble.module.css";

const Bubanim = () => {
  return (
    <div className="grid h-[20vh] place-content-center bg-black">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-center text-5xl font-gil text-white">
      {"I LOVE INDIA TECH  ".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Bubanim;