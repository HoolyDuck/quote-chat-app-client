import { Avatar } from "@/common/components/Avatar/Avatar";
import styles from "./styles.module.css";

type ChatHeaderProps = {
  firstName?: string;
  lastName?: string;
};

export const ChatHeader = ({ firstName, lastName }: ChatHeaderProps) => {
  return (
    <div className={styles.header}>
      <Avatar />
      <h2>
        {firstName} {lastName}
      </h2>
    </div>
  );
};
