import "./Dropdown.module.css";

import React from "react";

function Dropdown({ options, setEndDate }) {
  const handleChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option.date}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
