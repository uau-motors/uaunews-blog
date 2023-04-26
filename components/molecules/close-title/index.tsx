import { Link, Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

const CloseTitle = () => {
  useEffect(() => {
    const handleEscPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        console.log("ACTION ESC");
      }
    };

    document.addEventListener("keydown", handleEscPress);

    return () => {
      document.removeEventListener("keydown", handleEscPress);
    };
  }, []);

  return (
    <Link href={`/`} className={"close-title"}>
      <Box>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6B7280"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </Box>
      <Typography variant="body1">esc</Typography>
    </Link>
  );
};

export default CloseTitle;
