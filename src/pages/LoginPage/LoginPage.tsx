import { Button } from "@/common/components/Button/Button";
import styles from "./styles.module.css";
import { Container } from "@/common/components/Container/Container";
import { useEffect } from "react";
const googleAuthUrl = `${import.meta.env.VITE_API_URL}/auth/google`;

export const LoginPage = () => {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/auth/test`, {
      credentials: "include",
    });
    console.log("test");
  }, []);

  return (
    <Container>
      <div className={styles.login_box}>
        <h1 className={styles.title}>Welcome!</h1>
        <a href={googleAuthUrl}>
          <Button
            size="large"
            width="full"
          >
            Login with Google
          </Button>
        </a>
      </div>
    </Container>
  );
};
