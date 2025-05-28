import logo from "assets/logo.png";

const Logo: React.FC<
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">
> = ({ height = "120px", ...props }) => {
  return <img height={height} {...props} src={logo} alt="logo" />;
};

export default Logo;
