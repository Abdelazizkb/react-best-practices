import type { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

export interface IHeader extends React.FC<PropsWithChildren> {
  TitleContainer: React.FC<PropsWithChildren>;
  Title: React.FC<PropsWithChildren>;
  Subtitle: React.FC<PropsWithChildren>;
  HeaderActions: React.FC<PropsWithChildren>;
}

const Header: IHeader = ({ children }) => {
  return <div className={styles.header}>{children}</div>;
};

Header.TitleContainer = ({ children }) => {
  return <div className={styles.titleContainer}>{children}</div>;
};
Header.Title = ({ children }) => {
  return <div className={styles.title}>{children}</div>;
};
Header.Subtitle = ({ children }) => {
  return <div className={styles.subtitle}>{children}</div>;
};
Header.HeaderActions = ({ children }) => {
  return <div className={styles.headerActions}>{children}</div>;
};

export default Header;
