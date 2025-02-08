/**
 *
 * @param px - px value of convert to rem
 * @param baseFontSize - base html font size - default `16`
 * @returns rem value of px based on baseFontsize
 */
export const rem = (px = 16, baseFontsize = 16) => `${px / baseFontsize}rem`;

export { alpha, type SxProps } from "@mui/material";
export { common } from "@mui/material/colors";
