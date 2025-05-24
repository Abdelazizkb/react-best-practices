import type { ReactNode } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Loader from "components/loaders";

interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  variant?: "default" | "link" | "outlined";
  size?: "default" | "large" | "small" | "stretch";
  color?: "primary" | "blue" | "sky";
  disabled?: boolean;
  loading?: boolean;
  children?: ReactNode;
}

const colors = {
  primary: "var(--gray-600)",
  blue: "var(--blue-600)",
  sky: "var(--sky-600)",
};

const Button: React.FC<Props> = ({
  color = "primary",
  variant = "default",
  size = "default",
  disabled = false,
  loading = false,
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
      })}
      {...props}
    >
      {loading ? (
        <Loader color={variant === "default" ? "white" : colors[color]} />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
