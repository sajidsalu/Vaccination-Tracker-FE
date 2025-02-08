import { Box, IconButton, Paper, Typography } from "@mui/material";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { FC } from "react";
import { CardLayoutProps } from "./CardLayout.types";
import { rem } from "@/utils/apptheme/themeUtils";

const CardLayout: FC<CardLayoutProps> = (props) => {
  const {
    children,
    title,
    subtitle,
    headerAction,
    heightAuto,
    enableExtraPadding,
    disableHeaderMargin,
    onClickBackButton,
  } = props;

  return (
    <Paper
      elevation={3}
      sx={{
        padding: { xs: `${rem(24)} ${rem(16)}`, sm: rem(32) },
        minHeight: heightAuto ? "auto" : "",
        flexGrow: heightAuto ? "initial" : "1",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {(title || subtitle || headerAction || onClickBackButton) && (
        <Box
          sx={{
            display: "flex",
            flexShrink: 0,
            gap: rem(16),
            alignItems: "center",
            marginBottom: disableHeaderMargin ? 0 : rem(24),
          }}
        >
          {onClickBackButton && (
            <Box sx={{ flexShrink: 0, alignSelf: "flex-start" }}>
              <IconButton
                id="back-navigation-button"
                aria-label="back"
                size="medium"
                color="default"
                sx={{
                  ".MuiSvgIcon-root": { fontSize: { xs: rem(26), lg: rem(28) } },
                }}
                onClick={onClickBackButton}
              >
                <ArrowBackIosOutlinedIcon />
              </IconButton>
            </Box>
          )}
          {(title || subtitle || headerAction) && (
            <Box
              sx={{
                minWidth: 0,
                flexGrow: 1,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: rem(8),
                rowGap: { xs: rem(24), md: 0 },
              }}
            >
              {(title || subtitle) && (
                <Box
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: rem(4),
                    minWidth: 0,
                    alignSelf: { sm: "center" },
                  }}
                >
                  {title && (
                    <Typography variant="h6" sx={{ textTransform: "capitalize", wordBreak: "break-word" }}>
                      {title}
                    </Typography>
                  )}
                  {subtitle && <Typography variant="body1">{subtitle}</Typography>}
                </Box>
              )}

              {headerAction && (
                <Box
                  sx={{
                    minWidth: "0",
                    display: "flex",
                    flexShrink: 0,
                    justifyContent: "flex-end",
                    alignSelf: { sm: "center" },
                    ml: { md: "auto" },
                  }}
                >
                  {headerAction}
                </Box>
              )}
            </Box>
          )}
        </Box>
      )}
      <Box
        sx={{
          flexGrow: 1,
          minHeight: 0,
          paddingLeft: {
            sm: enableExtraPadding ? rem(48) : "",
          },
        }}
      >
        {children}
      </Box>
    </Paper>
  );
};

export default CardLayout;
