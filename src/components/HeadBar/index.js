import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  IconButton,
  Container,
  Box,
  Avatar,
  Tooltip,
} from "@mui/material";
import { ColorModeContext } from "../../App";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function HeadBar() {
  const colorMode = useContext(ColorModeContext);
  const [theme, setTheme] = useState(colorMode.mode);

  const handleModeChange = () => {
    colorMode.colorMode.toggleColorMode();
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <AppBar
      style={{
        height: "8vh",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      position="fixed"
      color="primary"
    >
      <Container
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Box style={{ display: "inline-block", alignSelf: "center" }}>
          <Tooltip
            title={`switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <IconButton onClick={handleModeChange}>
              {theme === "dark" ? (
                <Brightness7Icon
                  style={{ color: "lightyellow", fontSize: "1.5rem" }}
                />
              ) : (
                <Brightness4Icon
                  style={{ color: "white", fontSize: "1.5rem" }}
                />
              )}
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Avatar alt="S" src="*" />
        </Box>
      </Container>
    </AppBar>
  );
}

export default HeadBar;

