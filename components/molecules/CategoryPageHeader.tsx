import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Breadcrumb from "@molecules/breadcrumb";
import TitleSection from "@molecules/TitleSection";
import { getTitle } from "@utility/GetTitle";
import { useRouter } from "next/router";
import Image from "next/image";

const CategoryHeader = () => {
  const router = useRouter();
  const { pathname } = router;
  const pathnames = pathname.split("/").filter((x) => x);
  const title = getTitle(pathnames[0], "");

  return (
    <Box className="category-header">
      <Grid container>
        <Grid item xs={8} className="category-content">
          <Breadcrumb />
          <TitleSection title={title} />
          <Typography variant="h4" className="category-descript">
            Esta categoria é uma seção dedicada a fornecer informações atualizadas e relevantes sobre o mundo dos
            automóveis.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box className="category-media">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/samples%2Fimage-20.jpeg?alt=media"
              alt={`categoria-${pathnames[0]}`}
              width={1024}
              height={768}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoryHeader;
