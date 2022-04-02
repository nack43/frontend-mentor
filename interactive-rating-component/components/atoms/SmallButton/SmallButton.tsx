import React from "react";
import styles from "./SmallButton.module.css";

interface SmallButtonProps {
  text: string;
}

export const SmallButton = ({ text }: SmallButtonProps) => {
  return <button className={styles["small-button"]}>{text}</button>;
};
