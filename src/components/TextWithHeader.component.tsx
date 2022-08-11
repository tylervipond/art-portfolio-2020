import * as React from "react";
import styled from "styled-components";
import { Typography } from "./Typography.component";

const TextWithHeaderHeader = styled("div")``;
TextWithHeaderHeader.displayName = "TextWithHeaderHeader";

const TextWithHeaderLayout = styled("div")`
  display: grid;
  grid-auto-flow: row;
  gap: ${({ theme }) => theme.spacing[1] / 16}rem;
`;
TextWithHeaderLayout.displayName = "TextWithHeaderLayout";

export interface TextWithHeaderProps {
  text: string;
  header: string;
  detail?: string;
}

export const TextWithHeader: React.FC<TextWithHeaderProps> = ({
  text,
  header,
  detail,
}) => (
  <TextWithHeaderLayout>
    <TextWithHeaderHeader>
      <Typography variant="sub-header" as="h3">
        {header}
      </Typography>
      {detail ? <Typography variant="detail">{detail}</Typography> : null}
    </TextWithHeaderHeader>
    <Typography variant="body">{text}</Typography>
  </TextWithHeaderLayout>
);
TextWithHeader.displayName = "TextWithHeader";
