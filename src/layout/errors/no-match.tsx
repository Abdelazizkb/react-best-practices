import { Button } from "components";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.background}>404</div>
      <div className={styles.content}>
        <p>So sorry</p>
        <p>We couldn't find what you were looking for...</p>
        <Button onClick={() => navigate("/")} rounded>
          Go back to homepage
        </Button>
      </div>
    </div>
  );
};

export default NoMatch;
