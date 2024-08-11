import { Button } from "@/common/components/Button/Button";
import styles from "./styles.module.css";
import { Container } from "@/common/components/Container/Container";

const googleAuthUrl = `${import.meta.env.VITE_API_URL}/auth/google`;

export const LoginPage = () => {
  return (
    <Container>
      <div className={styles.login_box}>
        <h1 className={styles.title}>Welcome!</h1>
        <Button
          size="large"
          width="full"
        >
          <a href={googleAuthUrl}>Login with Google</a>
        </Button>
      </div>
    </Container>
  );
};
