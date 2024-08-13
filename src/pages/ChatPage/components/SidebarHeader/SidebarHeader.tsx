import { Input } from "@/common/components/Input/Input";
import styles from "./styles.module.css";
import { Button } from "@/common/components/Button/Button";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { Avatar } from "@/common/components/Avatar/Avatar";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { resetUser } from "@/lib/store/slices/user.slice";
import { useNavigate } from "react-router-dom";
import { setName } from "@/lib/store/slices/chat-search.slice";
import { useDebouncedCallback } from "use-debounce";
import { useAutoSendMessages } from "@/common/hooks/useAutoSendMessages";
export const SidebarHeader = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isAutoSendMessages, setIsAutoSendMessages } = useAutoSendMessages();

  const handleLogout = () => {
    dispatch(resetUser());
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const toggleAutoSendMessages = () => {
    setIsAutoSendMessages((prev) => !prev);
  };

  const debouncedHandleChange = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const name = e.target.value;
      dispatch(setName(name));
    },
    500
  );

  const autoSendMessagesButton = (
    <Button
      size="small"
      onClick={toggleAutoSendMessages}
    >
      {isAutoSendMessages ? "Stop auto send" : "Auto send messages"}
    </Button>
  );

  const logInOrOutButton = user ? (
    <Button
      size="small"
      variant="secondary"
      onClick={handleLogout}
    >
      Log out
    </Button>
  ) : (
    <Button
      size="small"
      variant="primary"
      onClick={handleLogin}
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
        <div className={styles.buttons}>
          {autoSendMessagesButton}
          {logInOrOutButton}
        </div>
      </div>
      <form>
        <Input
          placeholder="Search for chats"
          leftIcon={<SearchIcon />}
          onChange={debouncedHandleChange}
        />
        <button
          className="visually-hidden"
          type="submit"
        />
      </form>
    </div>
  );
};
