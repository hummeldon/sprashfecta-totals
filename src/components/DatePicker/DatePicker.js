import React from "react";
import styles from "./DatePicker.module.css";

function DatePicker({ date, setDate }) {
  return (
    <div>
      <label htmlFor="datePicker">Select date:</label>
      <input
        type="date"
        id="datePicker"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        className={styles.DatePicker}
      />
    </div>
  );
}

export default DatePicker;
