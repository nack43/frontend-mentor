import { Number } from "../../atoms/Number";
import styles from "./Numbers.module.css";

interface NumbersProps {
  selectedNum: number;
  setSelectedNum: (num: number) => void;
}

export const Numbers = ({ selectedNum, setSelectedNum }: NumbersProps) => {
  return (
    <div className={styles.numbers}>
      {Array(5)
        .fill(0)
        .map((_, i: number) => {
          return (
            <Number
              key={i + 1}
              num={i + 1}
              selected={i + 1 === selectedNum}
              onClick={() => setSelectedNum(i + 1)}
            />
          );
        })}
    </div>
  );
};
