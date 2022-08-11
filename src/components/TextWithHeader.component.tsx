import * as React from "react";
import styled from "styled-components";
import { Typography } from "./Typography.component";

const TextWithHeaderLayout = styled("div")`
  display: grid;
  grid-auto-flow: row;
  gap: ${({ theme }) => theme.spacing[1] / 16}rem;
`;
TextWithHeaderLayout.displayName = "TextWithHeaderLayout";

export interface TextWithHeaderProps {
  text: string;
  header: string;
}

export const TextWithHeader: React.FC<TextWithHeaderProps> = ({
  text,
  header,
}) => (
  <TextWithHeaderLayout>
    <Typography variant="sub-header" as="h3">
      {header}
    </Typography>
    <Typography variant="body">{text}</Typography>
  </TextWithHeaderLayout>
);
TextWithHeader.displayName = "TextWithHeader";
