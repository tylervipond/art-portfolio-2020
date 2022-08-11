import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: stringbaseColors.white;
      background: string;
      emphasis: string;
      border: string;
    };
    fontSizes: number[];
    fontFamilies: { body: string; display: string };
    spacing: number[];
    borderRadii: number[];
    letterSpacing: {
      body: string;
      display: string;
    };
  }
}
