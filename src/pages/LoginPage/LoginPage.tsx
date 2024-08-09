import { Button } from "@/common/components/Button/Button";
import styles from "./styles.module.css";

export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login_box}>
        <h1 className={styles.title}>Welcome!</h1>
        <Button size="large" width="full">Login with Google</Button>
      </div>
    </div>
  );
};
