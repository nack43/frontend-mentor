import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  onClick: () => void;
}

export const Button = ({ onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      SUBMIT
    </button>
  );
};
