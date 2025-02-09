import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"; // Import CssBaseline
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0, // Override the default margin
          padding: 0, // Ensure padding is also reset
        },
      },
    },
  },
});


createRoot(document.getElementById("root")!).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline /> 
        <App />
      </ThemeProvider>
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
