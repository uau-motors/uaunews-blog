import React, { useEffect, useState } from "react";
import { Button, Box, IconButton } from "@mui/material";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";
import FeedIcon from "@mui/icons-material/Feed";
import { useOverlay } from "@utility/contexts/ProviderContext";
import settings from "@utility/Settings";

// Define the type for the BeforeInstallPromptEvent to avoid errors
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

// Augment the WindowEventMap to include beforeinstallprompt event
declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

const MiddleActions: React.FC = () => {
  const { socialItens } = settings;
  const { openModal } = useOverlay();

  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const isPwaInstalled = typeof window !== "undefined" && window.matchMedia("(display-mode: standalone)").matches;

  const handleInstallButtonClick = () => {
    prompt?.prompt();
  };

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
      {socialItens.map((item, key) => (
        <IconButton
          type="button"
          sx={{ p: "5px" }}
          aria-label={item.title.toLowerCase()}
          key={key}
          className={`btn-social btn-${item.title.toLowerCase()}`}
          style={{ color: "#FFF", top: -4 }}
        >
          {item.icon}
        </IconButton>
      ))}

      {!isPwaInstalled && (
        <Button
          startIcon={<InstallMobileIcon style={{ fontSize: "14px" }} />}
          style={{ color: "#FFF", fontSize: "12px", top: "-5px" }}
          variant="outlined"
          color="primary"
          className="btn btn-app btn-xs"
          onClick={handleInstallButtonClick}
        >
          &nbsp; <span className="text">Baixe nosso App</span>
        </Button>
      )}

      <Button
        startIcon={<FeedIcon style={{ fontSize: "14px" }} />}
        style={{ fontSize: "12px", top: "-5px" }}
        color="primary"
        variant="contained"
        className="btn primary btn-cta btn-xs"
        onClick={openModal}
      >
        &nbsp; <span className="text">ASSINE</span>
      </Button>
    </Box>
  );
};

export default MiddleActions;
