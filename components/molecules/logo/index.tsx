import Link from "next/link";
import { Typography } from "@mui/material";
type LogoProps = {
  mode: "dark" | "light";
};

const Logo = ({ mode }: LogoProps): JSX.Element => {
  const logoSrc = `/assets/images/logo-${mode}.svg`;

  return (
    <Link href={"/"} className={`logo`}>
      <Typography variant="h1">UauMotors</Typography>
      <img src={logoSrc} alt="uaumotors logo" />
    </Link>
  );
};

export default Logo;
