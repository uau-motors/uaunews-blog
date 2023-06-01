import { Breadcrumbs, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HomeIcon from "@mui/icons-material/Home";
import { getTitle } from "@utility/getTitle";

interface BreadcrumbProps {
  separator?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = () => {
  const router = useRouter();
  const { pathname, query } = router;

  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs
      separator={<KeyboardArrowRightIcon />}
      aria-label="breadcrumb"
      className="breadcrumb"
    >
      <Link color="inherit" href="/">
        <HomeIcon className="icon-home" />
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join(">")}`;
        const title = getTitle(name);

        return (
          <Link key={name} color="inherit" href={{ pathname: routeTo, query }}>
            {title}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
