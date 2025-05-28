import type { PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import Header, { type IHeader } from "./header";

interface ISection extends React.FC<PropsWithChildren> {
  MainContent: React.FC<PropsWithChildren>;
}

export interface IMain extends React.FC<PropsWithChildren> {
  Section: ISection;
  Header: IHeader;
  Content: React.FC<PropsWithChildren>;
}

const Main: IMain = ({ children }) => {
  return <div className={styles.main}>{children}</div>;
};

const Section: ISection = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};

Main.Content = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

Section.MainContent = ({ children }) => {
  return <div className={styles.mainContent}>{children}</div>;
};

Main.Section = Section;
Main.Header = Header;
export default Main;
