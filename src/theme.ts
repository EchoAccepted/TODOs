const getDesignTokens = (mode: "light" | "dark" | undefined) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#389724",
          },
          secondary: {
            main: "#f50057",
          },
          divider: "rgba(18,18,18,0.12)",
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#189784",
          },
          secondary: {
            main: "#f50057",
          },
        }),
  },
});

export default getDesignTokens;

