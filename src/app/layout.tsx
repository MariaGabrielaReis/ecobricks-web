import { Box, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";

import theme from "@/theme";

export const metadata: Metadata = {
  title: "Ecobricks",
  description: "Loja de blocos para construção",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                bgcolor: "background.default",
                mt: ["122px", "135px", "146px"],
                p: 3,
              }}
            >
              {children}
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
