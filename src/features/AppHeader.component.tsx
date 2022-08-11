import * as React from "react";
import styled from "styled-components";
import { Typography } from "../components/Typography.component";

const AppHeaderLayout = styled("a")`
  text-decoration: none;
  outline: none;
`;
AppHeaderLayout.displayName = "AppHeaderLayout";

export const AppHeader = () => (
  <header>
    <AppHeaderLayout href="/">
      <Typography variant="header">TYLER VIPOND</Typography>
      <Typography variant="sub-header">
        Art &amp; Design &amp; Software
      </Typography>
    </AppHeaderLayout>
  </header>
);
AppHeader.displayName = "AppHeader";
