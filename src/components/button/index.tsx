import type { ReactNode } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Loader from "components/loaders";

interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  variant?: "default" | "link" | "outlined";
  size?: "default" | "stretch";
  color?: "primary" | "blue" | "sky";
  disabled?: boolean;
  loading?: boolean;
  rounded?: boolean;
  startIcon?: ReactNode;
  children?: ReactNode;
}

const colors = {
  primary: "var(--gray-600)",
  blue: "var(--blue-400)",
  sky: "var(--sky-400)",
};

const Button: React.FC<Props> = ({
  color = "primary",
  variant = "default",
  size = "default",
  disabled = false,
  rounded = false,
  loading = false,
  startIcon,
  children,
  ...props
}) => {
  return (
    <button
      className={classNames(styles.button, {
        [styles[`button--color-${color}`]]: true,
        [styles[`button--variant-${variant}`]]: true,
        [styles[`button--size-${size}`]]: true,
        [styles[`button--disabled`]]: disabled,
        [styles[`button--rounded`]]: rounded,
      })}
      {...props}
    >
      {loading ? (
        <Loader color={variant === "default" ? "white" : colors[color]} />
      ) : (
        <>
          {startIcon && startIcon}
          <span>{children}</span>
        </>
      )}
    </button>
  );
};

export default Button;
