import * as React from "react";
import styled from "styled-components";
import { Thumbnail } from "./Thumbnail.component";
import { Typography } from "./Typography.component";

const ArtworkListItemLayout = styled("div")`
  display: grid;
  grid-auto-flow: row;
  gap: ${({ theme }) => theme.spacing[1] / 16}rem;
  max-width: 240px;
  text-decoration: none;
  transform-origin: center;
  transition: transform 0.2s;
  background-color: ${({ theme }) => theme.colors.background};
  outline: none;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    border: 2px solid transparent;
    filter: drop-shadow(0px 0px 5px transparent);
    transition: filter 0.2s, border-color 0.2s;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    &::after {
      border: 2px solid #00d6e3;
      filter: drop-shadow(0px 0px 5px #00d6e3);
    }
  }
`;
ArtworkListItemLayout.displayName = "ArtworkListItemLayout";

const ArtworkListItemInfoLayout = styled("div")`
  display: grid;
  grid-auto-flow: row;
  gap: ${({ theme }) => theme.spacing[1] / 16}rem;
  padding: 0 ${({ theme }) => theme.spacing[0] / 16}rem
    ${({ theme }) => theme.spacing[0] / 16}rem;
`;

interface ArtworkListItemInfoProps {
  title: string;
  media: string;
  year: string;
  size: string;
}

const ArtworkListItemInfo: React.FC<ArtworkListItemInfoProps> = ({
  title,
  media,
  size,
  year,
}) => (
  <ArtworkListItemInfoLayout>
    <Typography variant="body">{title}</Typography>
    <Typography variant="fine-print">
      {media}, {size}, {year}
    </Typography>
  </ArtworkListItemInfoLayout>
);

export interface ArtworkListItemProps {
  title: string;
  media: string;
  year: string;
  size: string;
  imageSrc: string;
  artSrc: string;
}

export const ArtworkListItem: React.FC<ArtworkListItemProps> = ({
  title,
  media,
  year,
  size,
  imageSrc,
  artSrc,
}) => (
  <ArtworkListItemLayout as="a" href={artSrc}>
    <Thumbnail size="small" src={imageSrc} />
    <ArtworkListItemInfo title={title} media={media} year={year} size={size} />
  </ArtworkListItemLayout>
);
