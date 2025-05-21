import { Suspense, type PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import authPageImage from "assets/auth-pages.jpg";
import { Loader, Logo } from "components";

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.auth}>
      <aside>
        <img src={authPageImage} alt="auth-page-image" />
      </aside>
      <main>
        <div>
          <Suspense fallback={<Loader />}>
            <div className={styles.Content}>
              <Logo />
              {children}
            </div>
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
