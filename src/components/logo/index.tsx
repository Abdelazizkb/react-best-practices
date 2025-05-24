import logo from "assets/logo.png";

const Logo: React.FC<
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">
> = ({ ...props }) => {
  return <img height="120px" {...props} src={logo} alt="logo" />;
};

export default Logo;
