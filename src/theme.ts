"use client";

import { createTheme } from "@mui/material/styles";

import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  palette: { mode: "light", primary: { main: "#EF9272", dark: "#CC6E57" } },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default theme;
