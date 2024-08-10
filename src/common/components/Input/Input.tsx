import clsx from "clsx";
import styles from "./styles.module.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const Input = ({
  className,
  leftIcon,
  rightIcon,
  ...props
}: InputProps) => {
  return (
    <div className={styles.input_wrapper}>
      <span className={clsx(styles.icon, styles.left_icon)}>{leftIcon}</span>
      <input
        {...props}
        className={clsx(styles.input, className, {
          [styles.left_icon_input]: leftIcon,
        })}
      />
      <span className={clsx(styles.icon, styles.right_icon)}>{rightIcon}</span>
    </div>
  );
};
