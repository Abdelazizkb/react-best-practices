import classNames from "classnames";
import styles from "./styles.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: "success" | "error" | "default";
  variant?: "password" | "default";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Input: React.FC<Props> = ({
  variant = "default",
  state = "default",
  ...props
}) => {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles[`wrapper--state-${state}`]]: true,
        [styles[`wrapper--variant-${variant}`]]: true,
      })}
    >
      <input {...props} />
    </div>
  );
};

export default Input;
