import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Breadcrumb from "@molecules/breadcrumb";
import TitleSection from "@components/molecules/title-section";
import { getTitle } from "@utility/getTitle";
import { useRouter } from "next/router";
import Image from "next/image";

const CategoryHeader = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const pathnames = pathname.split("/").filter((x) => x);
  const title = getTitle(pathnames[0], "");

  return (
    <Box className="category-header">
      <Grid container>
        <Grid item xs={8} className="category-content">
          <Breadcrumb />
          <TitleSection title={title} />
          <Typography variant="h4" className="category-descript">
            The real test is not whether you avoid this failure, because you won’t. It’s whether you let it harden or
            shame you into inaction, or whether you learn from it; whether you choose to persevere.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box className="category-media">
            <Image src="/assets/images/samples/cars/image-20.jpeg" alt={pathnames[0]} width={1024} height={768} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoryHeader;
