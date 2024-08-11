import styles from "./styles.module.css";
import noAvatar from "@/assets/images/no-avatar.png";

type AvatarProps = {
  src?: string;
  alt?: string;
};

export const Avatar = ({ src, alt }: AvatarProps) => {
  return (
    <img
      src={src || noAvatar}
      alt={alt || "avatar"}
      className={styles.avatar}
    />
  );
};
