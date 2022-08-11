import { DefaultTheme } from "styled-components";

const baseColors = {
  black: "#161616",
  white: "#E9E9E9",
  teal: "#00D6E3",
  mediumGrey: "#BCBCBC",
};

const fontSizes = [14, 16, 18, 20, 24, 32, 40, 48];

const fontFamilies = {
  body: "Open Sans",
  display: "Public Sans",
};

const spacing = [4, 8, 12, 16, 24, 32, 40, 48];

const borderRadii = [2, 4, 8];

const baseLetterSpacing = {
  tight: "-.025em",
  normal: "0em",
};

export const theme: DefaultTheme = {
  colors: {
    text: baseColors.white,
    background: baseColors.black,
    emphasis: baseColors.teal,
    border: baseColors.mediumGrey,
  },
  fontSizes,
  fontFamilies,
  spacing,
  borderRadii,
  letterSpacing: {
    body: baseLetterSpacing.normal,
    display: baseLetterSpacing.tight,
  },
};
