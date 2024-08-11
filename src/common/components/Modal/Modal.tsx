import clsx from "clsx";
import styles from "./styles.module.css";

type Properties = {
  children?: React.ReactNode;
  isOpen: boolean;
  title?: string;
  onClose?: () => void;
};

export const Modal = ({ children, isOpen, title, onClose }: Properties) => {
  return (
    <div className={clsx(styles.modal, isOpen && styles.open)}>
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <h2>{title}</h2>
          <button onClick={onClose}>X</button>
        </div>
        <div className={styles.modal_body}>{children}</div>
      </div>
    </div>
  );
};
