import type { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

const Label: React.FC<PropsWithChildren> = ({ children }) => {
  return <p className={styles.label}>{children}</p>;
};

export default Label;
