import { Input } from "components";
import styles from "./styles.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.header}>
        <p className="heading-3">Welcome back.</p>
        <p className="heading-3">Log in to your account below.</p>
      </div>
      <form action="">
        <Input placeholder="Name@example.com" />
        <Input placeholder="Password" />
      </form>
    </div>
  );
};

export default LoginPage;
