import { ReactNode } from "react";
import styles from "./IconInCircle.module.css";

export const IconInCircle = ({ icon }: { icon: ReactNode }) => {
  return <div className={styles["icon-in-circle"]}>{icon}</div>;
};
