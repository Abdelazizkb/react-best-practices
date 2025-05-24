import { Button, Input, Label } from "components";
import styles from "./styles.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.header}>
        <p className="heading-3">Welcome back.</p>
        <p className="heading-3">Log in to your account below.</p>
      </div>
      <form action="">
        <Label>Email</Label>
        <Input placeholder="Name@example.com" />
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Button size="stretch" disabled>
          Connect
        </Button>
        <p className={styles.buttonsDivider}> - or -</p>
        <Button variant="outlined" size="stretch">
          Continue as guest
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
