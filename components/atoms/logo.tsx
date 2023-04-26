import Link from "next/link";
import styles from "../../styles/Header.module.css";

type LogoProps = {
  mode: string;
};

const Logo = ({ mode }: LogoProps): JSX.Element => {
  return (
    <h1 className={`${styles.logo} logo`}>
      <Link href={"/"}>
        <img
          src={`/assets/images/logo-${mode === "dark" ? "dark" : "light"}.svg`}
          alt="uaumotors logo"
          className={styles.fluid}
        />
      </Link>
    </h1>
  );
};

export default Logo;
