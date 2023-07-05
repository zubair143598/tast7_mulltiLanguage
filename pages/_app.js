import { ThemeProvider } from "@mui/material";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
   
      <Component {...pageProps} />
   
  );
}
