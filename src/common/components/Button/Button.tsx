import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

type Properties = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  width?: "full" | "auto";
  variant?: "primary" | "secondary";
};

export const Button = ({
  size = "medium",
  width = "auto",
  variant = "primary",
  className,
  ...props
}: Properties) => {
  const buttonClassName = clsx(
    styles.button,
    styles[size],
    styles[width],
    styles[variant],
    className
  );

  return (
    <button
      className={buttonClassName}
      {...props}
    />
  );
};
