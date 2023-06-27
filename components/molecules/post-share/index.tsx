import React from "react";

import { Box, Typography, Tooltip } from "@mui/material";
import Link from "next/link";
import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkIcon from "@mui/icons-material/Link";
import PrintIcon from "@mui/icons-material/Print";

const PostShare = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          "justify-content": "flex-end"
        }}
      >
        <Typography sx={{ minWidth: 100 }} className="title-share">
          {" "}
          <ShareIcon /> Compartilhe:
        </Typography>
        <Link href="#" className="facebook">
          <Tooltip title="Facebook" placement="top">
            <FacebookIcon />
          </Tooltip>
        </Link>
        <Link href="#" className="twitter">
          <Tooltip title="Twitter" placement="top">
            <TwitterIcon />
          </Tooltip>
        </Link>
        <Link href="#" className="link">
          <Tooltip title="Link" placement="top">
            <LinkIcon />
          </Tooltip>
        </Link>
        <Link href="#" className="print">
          <Tooltip title="Imprimir" placement="top">
            <PrintIcon />
          </Tooltip>
        </Link>
      </Box>
    </React.Fragment>
  );
};

export default PostShare;
