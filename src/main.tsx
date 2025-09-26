import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Figtree', sans-serif", // Global font
  },
});

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline /> {/* resets browser defaults and applies global font */}
    <App />
  </ThemeProvider>
);
