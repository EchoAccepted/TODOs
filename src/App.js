import "./App.css";
import React, { useState, useMemo, useEffect } from "react";
import getDesignTokens from "./theme.ts";
import { Outlet } from "react-router-dom";
import { CssBaseline, useMediaQuery, IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { HeadBar, SideBar } from "./components/";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  mode: "",
});
export const SideBarModeContext = React.createContext({
  toggleSideBar: () => {},
});
function App() {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );
  const [sideBar, setSideBar] = useState(
    useMediaQuery("(max-width:600px)") ? "mini" : "normal"
  );
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const sideBarMode = useMemo(
    () => ({
      toggleSideBar: () => {
        setSideBar((prev) => (prev === "normal" ? "mini" : "normal"));
      },
    }),
    []
  );
  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={{ colorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SideBarModeContext.Provider value={{ sideBarMode, sideBar }}>
          <div id="container">
            <HeadBar />
            <div
              id="sidebar"
              style={{ width: sideBar === "normal" ? "16rem" : "4rem" }}
            >
              <SideBar />
              <IconButton
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translate(50%,-50%)",
                }}
                onClick={() => sideBarMode.toggleSideBar()}
              >
                <NavigateBeforeIcon
                  style={{
                    backgroundColor: "#000",
                    borderRadius: "50%",
                    zIndex: "10000",
                    boxShadow:
                      "1px 1px 5px rgba(10,80,10,.3),inset 1px 1px 5px  rgba(10,80,10,.3)",
                    color: "#fff",
                    fontSize: "2rem",
                    transform:
                      sideBar === "normal" ? "rotate(0deg)" : "rotate(180deg)",
                  }}
                />
              </IconButton>
            </div>
            <div id="mainContainer">
              <div
                id="mainContent"
                style={{
                  position: "relative",
                }}
              >
                <Outlet />
              </div>
            </div>
          </div>
        </SideBarModeContext.Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

