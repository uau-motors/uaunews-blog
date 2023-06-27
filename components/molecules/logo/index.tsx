import Link from "next/link";
import { Typography } from "@mui/material";
import Image from "next/image";

type LogoProps = {
  mode: "dark" | "light";
};

const Logo = ({ mode }: LogoProps): JSX.Element => {
  const logoSrc = `/assets/images/logos/logo-orange.svg`;

  return (
    <Link href={"/"} className={`logo`}>
      <Image src={logoSrc} alt="uaumotors logo" width={1920} height={1080} />
      <Typography variant="h1">uaunews</Typography>
    </Link>
  );
};

export default Logo;
