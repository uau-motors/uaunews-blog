import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";
import FeedIcon from "@mui/icons-material/Feed";
import { MidleHeaderProps } from "../../utility/types";
import { useModal } from "@utility/contexts/modal-context";

const MiddleActions = ({ socials }: MidleHeaderProps) => {
  const { openModal } = useModal();
  return (
    <Box
      sx={{
        typography: "body1",
        "& > :not(style) + :not(style)": {
          ml: 1
        }
      }}
      className="boxSocials"
    >
      {socials.map((item, key) => {
        return (
          <IconButton
            type="button"
            sx={{ p: "5px" }}
            aria-label={item.title.toLowerCase()}
            key={key}
            style={{ color: "#FFF", top: -4 }}
          >
            {item.icon}
          </IconButton>
        );
      })}
      <Button
        startIcon={<InstallMobileIcon style={{ fontSize: "14px" }} />}
        style={{ color: "#FFF", fontSize: "12px", top: "-5px" }}
        variant="outlined"
        color="primary"
        className="btn"
      >
        &nbsp; Baixe nosso App
      </Button>
      <Button
        startIcon={<FeedIcon style={{ fontSize: "14px" }} />}
        style={{ fontSize: "12px", top: "-5px" }}
        color="primary"
        variant="contained"
        className="btn primary"
        onClick={openModal}
      >
        &nbsp; ASSINE
      </Button>
    </Box>
  );
};

export default MiddleActions;
