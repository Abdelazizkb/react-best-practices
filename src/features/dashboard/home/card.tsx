import type { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

const Card: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.customCard}>
    <div>{children}</div>
  </div>
);

export default Card;
