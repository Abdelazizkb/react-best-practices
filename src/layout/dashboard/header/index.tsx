import { Button, Logo } from "components";
import iconUser from "assets/user.png";
import styles from "./styles.module.scss";

import SearchIcon from "assets/icons/search.svg?react";
import HelpIcon from "assets/icons/help.svg?react";
import ExploreAppsIcon from "assets/icons/explore-apps.svg?react";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo height="32px" />
      <div className={styles.menu}>
        <Button variant="link" startIcon={<SearchIcon />}>
          Search
        </Button>
        <Button variant="link" startIcon={<HelpIcon />}>
          Help
        </Button>
        <Button variant="link" startIcon={<ExploreAppsIcon />}>
          Explore apps
        </Button>
        <Button variant="outlined">Contact Support</Button>
        <Button color="sky">Upgrade</Button>
        <img src={iconUser} alt="iconUser.png" />
      </div>
    </div>
  );
};

export default Header;
