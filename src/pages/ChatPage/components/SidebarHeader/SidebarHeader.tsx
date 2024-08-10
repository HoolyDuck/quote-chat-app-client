import { Input } from "@/common/components/Input/Input";
import styles from "./styles.module.css";
import { Button } from "@/common/components/Button/Button";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { Avatar } from "@/common/components/Avatar/Avatar";

export const SidebarHeader = () => {
  return (
    <div className={styles.side_header}>
      <div className={styles.avatar_wrapper}>
        <Avatar
          src="https://picsum.photos/200"
          alt="avatar"
        />
        <Button
          size="small"
          variant="secondary"
        >
          Log in
        </Button>
      </div>
      <Input
        placeholder="Search for chats"
        leftIcon={<SearchIcon />}
      />
    </div>
  );
};
