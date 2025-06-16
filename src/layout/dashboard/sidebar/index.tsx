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
import { useState, type PropsWithChildren, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "components";

type Props = {
  name: string;
  currentLink: string;
};

type IGroup = { name: string; title: string; icon: ReactNode }[];

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
        name: "tasks",
        title: "All",
        icon: <TaskIcon />,
      },
      {
        name: "tasks/starred",
        title: "Starred",
        icon: <StarredIcon />,
      },
      {
        name: "tasks/trash",
        title: "Trash",
        icon: <TrashIcon />,
      },
    ],
  },
  {
    name: "Note",
    group: [
      {
        name: "notes",
        title: "All",
        icon: <NoteIcon />,
      },
      {
        name: "notes/starred",
        title: "Starred",
        icon: <StarredIcon />,
      },
      {
        name: "notes/trash",
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

const Sidebar: React.FC<PropsWithChildren<{ currentLink: string }>> = ({
  currentLink,
  children,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.sidebarContainer}>
      <div
        className={classNames(styles.sidebar, {
          [styles["sidebar--collapsed"]]: collapsed,
        })}
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
          <div onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="var(--gray-400)"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.2 0H1.8C0.80976 0 0 0.80976 0 1.8V22.2C0 23.1902 0.80976 24 1.8 24H22.2C23.1902 24 24 23.1902 24 22.2V1.8C24 0.80976 23.1902 0 22.2 0ZM1.8 22.8C1.46952 22.8 1.2 22.5305 1.2 22.2V1.8C1.2 1.46952 1.46953 1.2 1.8 1.2H8.4V22.8H1.8ZM22.8 22.2C22.8 22.5305 22.5305 22.8 22.2 22.8H9.6V12.6H18.3597L17.5792 13.3805C17.339 13.6207 17.339 13.9805 17.5792 14.2207C17.6999 14.3403 17.8499 14.4 17.9999 14.4C18.1499 14.4 18.2999 14.3403 18.4194 14.2196L20.2194 12.4196C20.4597 12.1793 20.4597 11.8195 20.2194 11.5793L18.4194 9.77931C18.1792 9.53908 17.8194 9.53908 17.5792 9.77931C17.339 10.0195 17.339 10.3793 17.5792 10.6195L18.3597 11.4H9.59997V1.20003H22.2C22.5305 1.20003 22.8 1.46956 22.8 1.80003L22.8 22.2ZM7.2 3C7.2 3.33048 6.93047 3.6 6.6 3.6H3C2.66952 3.6 2.4 3.33047 2.4 3C2.4 2.66953 2.66953 2.4 3 2.4H6.6C6.93048 2.4 7.2 2.66953 7.2 3ZM7.2 5.4C7.2 5.73048 6.93047 6 6.6 6H3C2.66952 6 2.4 5.73047 2.4 5.4C2.4 5.06953 2.66953 4.8 3 4.8H6.6C6.93048 4.8 7.2 5.06953 7.2 5.4ZM6 7.8C6 8.13048 5.73047 8.4 5.4 8.4H3C2.66952 8.4 2.4 8.13047 2.4 7.8C2.4 7.46953 2.66953 7.2 3 7.2H5.4C5.73048 7.2 6 7.46953 6 7.8Z"
                  fill="var(--gray-400)"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="var(--gray-400)"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.2 0H1.8C0.80976 0 0 0.80976 0 1.8V22.2C0 23.1902 0.80976 24 1.8 24H22.2C23.1902 24 24 23.1902 24 22.2V1.8C24 0.80976 23.1902 0 22.2 0ZM1.8 22.8C1.46952 22.8 1.2 22.5305 1.2 22.2V1.8C1.2 1.46952 1.46953 1.2 1.8 1.2H8.4V22.8H1.8ZM22.8 22.2C22.8 22.5305 22.5305 22.8 22.2 22.8H9.6V1.2H22.2C22.5305 1.2 22.8 1.46953 22.8 1.8V11.4H14.0403L14.8208 10.6195C15.061 10.3793 15.061 10.0195 14.8208 9.77928C14.5805 9.53905 14.2208 9.53905 13.9805 9.77928L12.1805 11.5793C11.9403 11.8195 11.9403 12.1793 12.1805 12.4195L13.9805 14.2195C14.1001 14.3402 14.2501 14.4 14.4001 14.4C14.55 14.4 14.7001 14.3402 14.8196 14.2195C15.0598 13.9793 15.0598 13.6195 14.8196 13.3793L14.0403 12.6H22.8L22.8 22.2ZM7.2 3C7.2 3.33048 6.93047 3.6 6.6 3.6H3C2.66952 3.6 2.4 3.33047 2.4 3C2.4 2.66953 2.66953 2.4 3 2.4H6.6C6.93048 2.4 7.2 2.66953 7.2 3ZM7.2 5.4C7.2 5.73048 6.93047 6 6.6 6H3C2.66952 6 2.4 5.73047 2.4 5.4C2.4 5.06953 2.66953 4.8 3 4.8H6.6C6.93048 4.8 7.2 5.06953 7.2 5.4ZM6 7.8C6 8.13048 5.73047 8.4 5.4 8.4H3C2.66952 8.4 2.4 8.13047 2.4 7.8C2.4 7.46953 2.66953 7.2 3 7.2H5.4C5.73048 7.2 6 7.46953 6 7.8Z"
                  fill="var(--gray-400)"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className={styles.mainContainer}>{children}</div>
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
