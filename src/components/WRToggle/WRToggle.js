import React, { useState } from "react";
import styles from "./WRToggle.module.css";

function WRToggle({ onToggle }) {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
    onToggle(!isToggled);
  };

  return (
    <button onClick={handleToggle}>
      {isToggled ? "Hide WR Comparison" : "Show WR Comparison"}
    </button>
  );
}

export default WRToggle;
