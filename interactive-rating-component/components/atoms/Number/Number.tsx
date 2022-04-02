import styles from "./Number.module.css";

export const Number = ({
  num,
  selected,
  onClick,
}: {
  num: number;
  selected: boolean;
  onClick: () => void;
}) => {
  const bg = selected ? styles.bgLightGrey : "";
  return (
    <button onClick={onClick} className={`${styles.number} ${bg}`}>
      {num}
    </button>
  );
};
