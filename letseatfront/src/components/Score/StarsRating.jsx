import React from "react";
import styles from "./styles/StarsRating.module.css";

export const StarsRating = ({ score, setScore, scoreName }) => {
  const handleRadioChangeStar = function (e) {   
    setScore({ ...score, [scoreName]: e.target.value });
  };

  return (
    <div className={styles.StarsContainer}>
      <div className={styles.stars}>
        <input
          id={`radio5${scoreName}`}
          className={styles.StarInput}
          type="radio"
          name={scoreName}
          value={5}
          onChange={(e) => handleRadioChangeStar(e)}
        />
        <label htmlFor={`radio5${scoreName}`} className={styles.StarLabel}>
          ★
        </label>
        <input
          id={`radio4${scoreName}`}
          className={styles.StarInput}
          type="radio"
          name={scoreName}
          value={4}
          onChange={(e) => handleRadioChangeStar(e)}
        />
        <label htmlFor={`radio4${scoreName}`} className={styles.StarLabel}>
          ★
        </label>
        <input
          id={`radio3${scoreName}`}
          className={styles.StarInput}
          type="radio"
          name={scoreName}
          value={3}
          onChange={(e) => handleRadioChangeStar(e)}
        />
        <label htmlFor={`radio3${scoreName}`} className={styles.StarLabel}>
          ★
        </label>
        <input
          id={`radio2${scoreName}`}
          className={styles.StarInput}
          type="radio"
          name={scoreName}
          value={2}
          onChange={(e) => handleRadioChangeStar(e)}
        />
        <label htmlFor={`radio2${scoreName}`} className={styles.StarLabel}>
          ★
        </label>
        <input
          id={`radio1${scoreName}`}
          className={styles.StarInput}
          type="radio"
          name={scoreName}
          value={1}
          onChange={(e) => handleRadioChangeStar(e)}
        />
        <label htmlFor={`radio1${scoreName}`} className={styles.StarLabel}>
          ★
        </label>
      </div>
    </div>
  );
};
