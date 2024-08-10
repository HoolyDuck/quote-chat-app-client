import { Input } from "@/common/components/Input/Input";
import styles from "./styles.module.css";
import { Button } from "@/common/components/Button/Button";
import { SearchIcon } from "@/assets/icons/SearchIcon";

export const SidebarHeader = () => {
  return (
    <div className={styles.side_header}>
      <div className={styles.avatar_wrapper}>
        <img
          src="https://via.placeholder.com/150"
          alt="avatar"
          className={styles.avatar}
        />
        <Button size="small">Login</Button>
      </div>
      <Input
        placeholder="Search for chats"
        leftIcon={<SearchIcon />}
      />
    </div>
  );
};
