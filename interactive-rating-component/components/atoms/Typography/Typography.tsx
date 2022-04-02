import styles from "./Typography.module.css";

interface TypographyProps {
  text: string;
  size: "s" | "m";
  color: "white" | "light-grey";
  align?: "center" | "left";
}

export const Typography = ({
  text,
  size,
  color,
  align = "left",
}: TypographyProps) => {
  return (
    <p className={`${styles[size]} ${styles[color]} ${styles[align]}`}>
      {text}
    </p>
  );
};
