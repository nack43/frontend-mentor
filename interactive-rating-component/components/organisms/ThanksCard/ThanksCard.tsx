import React from "react";
import styles from "./ThanksCard.module.css";
import ThankYouIcon from "../../../public/images/illustration-thank-you.svg";
import { Typography } from "../../atoms/Typography";
import { SmallButton } from "../../atoms/SmallButton/SmallButton";

export const ThanksCard = () => {
  return (
    <div className={styles["thanks-card"]}>
      <ThankYouIcon />
      <SmallButton text="you selected 4 out of 5"></SmallButton>

      <Typography text="Thank you!" color="white" size="m" />
      <Typography
        text="We appreciate you taking the time to give a rating. If you ever need more support, don't hasitate to get in touch!"
        color="light-grey"
        size="s"
        align="center"
      />
    </div>
  );
};
