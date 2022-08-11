import styled, { DefaultTheme, StyledProps } from "styled-components";

export type TypographyVariant =
  | "header"
  | "sub-header"
  | "fine-print"
  | "body"
  | "interaction";

export interface TypographyProps {
  variant: TypographyVariant;
}

const getFontFamilyFromProps = ({
  variant,
  theme,
}: StyledProps<TypographyProps>) =>
  ["body", "fine-print"].includes(variant)
    ? theme.fontFamilies.body
    : theme.fontFamilies.display;

const fontSizes: Record<TypographyVariant, number> = {
  header: 7,
  "sub-header": 4,
  body: 1,
  "fine-print": 0,
  interaction: 2,
};

const getFontSizeFromProps = ({
  variant,
  theme,
}: StyledProps<TypographyProps>) =>
  `${theme.fontSizes[fontSizes[variant]] / 16}rem`;

const letterSpacing: Record<
  TypographyVariant,
  keyof DefaultTheme["letterSpacing"]
> = {
  header: "display",
  "sub-header": "display",
  body: "body",
  "fine-print": "body",
  interaction: "display",
};

const getLetterSpacingFromProps = ({
  variant,
  theme,
}: StyledProps<TypographyProps>) => theme.letterSpacing[letterSpacing[variant]];

const fontWeight: Record<TypographyVariant, number> = {
  header: 500,
  "sub-header": 300,
  body: 300,
  "fine-print": 500,
  interaction: 400,
};

const getFontWeightFromProps = ({ variant }: StyledProps<TypographyProps>) =>
  fontWeight[variant];

const getLineHeightFromProps = ({ variant }: StyledProps<TypographyProps>) =>
  variant === "header" ? "1.1em" : "1.25em";

export const Typography = styled("p")<TypographyProps>`
  margin: 0;
  font-family: ${getFontFamilyFromProps}, sans-serif;
  font-size: ${getFontSizeFromProps};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: ${getLetterSpacingFromProps};
  font-weight: ${getFontWeightFromProps};
  line-height: ${getLineHeightFromProps};
`;
Typography.displayName = "Typography";
