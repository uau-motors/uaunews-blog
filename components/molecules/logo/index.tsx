import Link from "next/link";
import { Typography } from "@mui/material";
type LogoProps = {
  mode: "dark" | "light";
};

const Logo = ({ mode }: LogoProps): JSX.Element => {
  const logoSrc = `/assets/images/logos/logo-orange.svg`;

  return (
    <Link href={"/"} className={`logo`}>
      <img src={logoSrc} alt="uaumotors logo" />
      <Typography variant="h1">uaunews</Typography>
    </Link>
  );
};

export default Logo;
