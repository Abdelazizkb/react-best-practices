import logo from "assets/logo.png";

const Logo: React.FC<
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">
> = ({ ...props }) => {
  return <img {...props} src={logo} alt="logo" height="360px" />;
};

export default Logo;
