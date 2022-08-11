import styled from "styled-components";

export interface ThumbnailProps {
  size: "small" | "large";
}

export const Thumbnail = styled("img")<ThumbnailProps>`
  display: block;
  padding: 0;
  margin: 0;
  width: ${({ size }) => (size === "large" ? "480px" : "240px")};
  max-width: 100%;
  aspect-ratio: 3 / 2;
`;
Thumbnail.displayName = "Thumbnail";
