
import { FC } from "react";
import { PageLayoutProps } from "./PageLayout.types";
import { rem } from "@/utils/apptheme/themeUtils";
import { Box, CircularProgress } from "@mui/material";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const PageLayout: FC<PageLayoutProps> = (props) => {
  const { children, breadcrumbs, showButton, loading, containerStyle } = props;

  return (
    <Box
      sx={{
        padding: {
          xs: rem(24),
          sm: `${rem(16)} ${rem(32)} ${rem(32)} ${rem(32)}`,
        },
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: rem(16),
          marginBottom: rem(24),
          flexShrink: 0,
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Breadcrumbs
          items={breadcrumbs}
          sx={{
            marginTop: {
              sm: rem(16),
            },
          }}
        />
        {showButton && (
          <Box
            sx={{
              flexGrow: 1,
              minWidth: 0,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {showButton}
          </Box>
        )}
      </Box>
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", ...containerStyle }}>
        {loading ? <CircularProgress size={20} /> : children}
      </Box>
    </Box>
  );
};

export default PageLayout;
