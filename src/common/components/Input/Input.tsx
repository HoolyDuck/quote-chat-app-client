import clsx from "clsx";
import styles from "./styles.module.css";
import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, leftIcon, rightIcon, ...props }: InputProps, ref) => {
    return (
      <div className={styles.input_wrapper}>
        <span className={clsx(styles.icon, styles.left_icon)}>{leftIcon}</span>
        <input
          className={clsx(styles.input, className, {
            [styles.left_icon_input]: leftIcon,
          })}
          {...props}
          ref={ref}
        />
        <span className={clsx(styles.icon, styles.right_icon)}>
          {rightIcon}
        </span>
      </div>
    );
  }
);
