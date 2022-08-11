import styled, { ThemeProvider } from "styled-components";
import * as React from "react";
import { theme } from "../styled-theme";

const PageLayoutLayout = styled("div")`
  height: 100%;
  display: grid;
  grid-auto-flow: row;
  gap: ${({ theme }) => theme.spacing[6] / 16}rem;
  padding: ${({ theme }) => theme.spacing[4] / 16}rem;
  justify-content: start;
`;
PageLayoutLayout.displayName = "PageLayoutLayout";

export interface PageLayoutProps {
  header: React.ReactComponentElement<any>;
  content: React.ReactComponentElement<any>;
  footer: React.ReactComponentElement<any>;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  header,
  content,
  footer,
}) => (
  <ThemeProvider theme={theme}>
    <PageLayoutLayout>
      {header}
      {content}
      {footer}
    </PageLayoutLayout>
  </ThemeProvider>
);
PageLayout.displayName = "PageLayout";
