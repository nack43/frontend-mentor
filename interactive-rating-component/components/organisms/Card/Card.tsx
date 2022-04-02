import { useState } from "react";
import styles from "./Card.module.css";
import { Numbers } from "../../molecules/Numbers";
import { Button } from "../../atoms/Button";
import { Typography } from "../../atoms/Typography";
import { IconInCircle } from "../../atoms/IconInCircle";
import StarIcon from "../../../public/images/icon-star.svg";

export const Card = () => {
  const [selectedNum, setSelectedNum] = useState(0);

  return (
    <div className={styles.card}>
      <IconInCircle icon={<StarIcon />} />
      <Typography text="How did we do?" color="white" size="m" />
      <Typography
        text="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
        color="light-grey"
        size="s"
      />
      <Numbers selectedNum={selectedNum} setSelectedNum={setSelectedNum} />
      <Button />
    </div>
  );
};
