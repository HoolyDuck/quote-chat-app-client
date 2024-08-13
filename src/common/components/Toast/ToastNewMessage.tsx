import styles from "./styles.module.css";

type ToastNewMessageProps = {
  firstName: string;
  lastName: string;
  content: string;
};

export const ToastNewMessage = ({
  firstName,
  lastName,
  content,
}: ToastNewMessageProps) => {
  const shortContent =
    content.length > 30 ? content.slice(0, 20) + "..." : content;

  return (
    <div className={styles.toast_container}>
      <p className={styles.title}>
        {firstName} {lastName}
      </p>
      <p>{shortContent}</p>
    </div>
  );
};
