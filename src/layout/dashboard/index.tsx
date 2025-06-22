import { type PropsWithChildren, Suspense } from "react";
import styles from "./styles.module.scss";
import Header from "./header";
import Main, { type IMain } from "./main";
import { Loader } from "components";
import Sidebar from "./sidebar";

interface ILayout extends React.FC<PropsWithChildren> {
  Main: IMain;
}

const Layout: ILayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Sidebar>{children}</Sidebar>
        </Suspense>
      </main>
    </div>
  );
};

Layout.Main = Main;
export default Layout;
