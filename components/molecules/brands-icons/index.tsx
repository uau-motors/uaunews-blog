import React from "react";

import { Paper, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BrandsIcons } from "../../../utility/constants";
import Link from "next/link";

const sortedBrandsIcons = BrandsIcons.sort((a, b) => a.localeCompare(b));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const BrandIcons = () => {
  return (
    <Box
      sx={{
        p: 1,
        bgcolor: "background.default",
        display: "grid",
        gridTemplateColumns: { md: "1fr 1fr 1fr 1fr" },
        gap: 1,
      }}
    >
      {sortedBrandsIcons.map((brand, key) => (
        <Item key={key} elevation={1} className="brand-item">
          <Link href={brand}>
            <img
              src={`/assets/images/logos/vehicles/${brand}.svg`}
              alt={brand}
              loading="lazy"
            />
          </Link>
        </Item>
      ))}
    </Box>
  );
};

export default BrandIcons;