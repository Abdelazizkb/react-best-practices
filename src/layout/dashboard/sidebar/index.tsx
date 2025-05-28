import DashboardIcon from "assets/icons/dashboard.svg?react";
import SettingsIcon from "assets/icons/settings.svg?react";
import TrialIcon from "assets/icons/trial.svg?react";
import SubscriptionIcon from "assets/icons/subscription.svg?react";
import TaskIcon from "assets/icons/task.svg?react";
import NoteIcon from "assets/icons/note.svg?react";
import StarredIcon from "assets/icons/starred.svg?react";
import TrashIcon from "assets/icons/trash.svg?react";
import HelpIcon from "assets/icons/help.svg?react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import type { PropsWithChildren, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "components";

type ILink =
  | "home"
  | "settings"
  | "help"
  | "starred"
  | "trash"
  | "all"
  | "subscription";

type Props = {
  name: ILink;
  currentLink: ILink;
};

type IGroup = { name: ILink; title: string; icon: ReactNode }[];

const pages: { name: string; group: IGroup }[] = [
  {
    name: "",
    group: [
      {
        name: "home",
        title: "Dashboard",
        icon: <DashboardIcon />,
      },
      {
        name: "subscription",
        title: "Subscription",
        icon: <SubscriptionIcon />,
      },
    ],
  },
  {
    name: "Task Manager",
    group: [
      {
        name: "all",
        title: "All",
        icon: <TaskIcon />,
      },
      {
        name: "starred",
        title: "Starred",
        icon: <StarredIcon />,
      },
      {
        name: "trash",
        title: "Trash",
        icon: <TrashIcon />,
      },
    ],
  },
  {
    name: "Note",
    group: [
      {
        name: "all",
        title: "All",
        icon: <NoteIcon />,
      },
      {
        name: "starred",
        title: "Starred",
        icon: <StarredIcon />,
      },
      {
        name: "trash",
        title: "Trash",
        icon: <TrashIcon />,
      },
    ],
  },
  {
    name: "Settings",
    group: [
      {
        name: "settings",
        title: "General Settings",
        icon: <SettingsIcon />,
      },
      {
        name: "help",
        title: "Help",
        icon: <HelpIcon />,
      },
    ],
  },
];

const Sidebar: React.FC<PropsWithChildren<{ currentLink: ILink }>> = ({
  currentLink,
  children,
}) => {
  return (
    <div className={styles.sidebarContainer}>
      <div
        className={classNames(styles.sidebar, [styles["sidebar--collapsed"]])}
      >
        <div className={styles.menu}>
          <span className={styles.newTask}>
            <Button color="sky">New Task</Button>
          </span>

          {pages.map((page, index) => (
            <div className={styles.group} key={index}>
              {index !== 0 && <p>{page.name}</p>}
              {page?.group.map((link, index) => (
                <Link currentLink={currentLink} key={index} name={link.name}>
                  {link.icon}
                  <p>{link.title}</p>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.subscription}>
            <div>
              <TrialIcon />
              <div>
                <p>Current plan:</p>
                <p>Pro trial</p>
              </div>
            </div>
            <p>Upgrade to pro to get the latest and exclusive element</p>
            <Button color="sky" size="stretch">
              Upgrade to PRO
            </Button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

const Link: React.FC<PropsWithChildren<Props>> = ({
  currentLink,
  name,
  children,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={classNames(styles.link, {
        [styles["link--active"]]: name === currentLink,
      })}
      onClick={() => navigate(name)}
    >
      {children}
    </div>
  );
};

export default Sidebar;
