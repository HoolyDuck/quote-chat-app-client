import { Input } from "@/common/components/Input/Input";
import styles from "./styles.module.css";
import { Button } from "@/common/components/Button/Button";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { Avatar } from "@/common/components/Avatar/Avatar";
import { useAppSelector } from "@/lib/store/hooks";

export const SidebarHeader = () => {
  const { user } = useAppSelector((state) => state.user);

  const logInOrOutButton = user ? (
    <Button
      size="small"
      variant="secondary"
    >
      Log out
    </Button>
  ) : (
    <Button
      size="small"
      variant="primary"
    >
      Log in
    </Button>
  );

  return (
    <div className={styles.side_header}>
      <div className={styles.avatar_wrapper}>
        <Avatar
          src={user?.avatar}
          alt="User avatar"
        />
        {logInOrOutButton}
      </div>
      <Input
        placeholder="Search for chats"
        leftIcon={<SearchIcon />}
      />
    </div>
  );
};
