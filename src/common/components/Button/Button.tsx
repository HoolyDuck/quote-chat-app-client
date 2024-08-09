import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

type Properties = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  width?: "full" | "auto";
};

export const Button = ({
  size = "medium",
  width = "auto",
  ...props
}: Properties) => {
  return (
    <button
      className={clsx(styles.button, styles[size], styles[width])}
      {...props}
    />
  );
};
