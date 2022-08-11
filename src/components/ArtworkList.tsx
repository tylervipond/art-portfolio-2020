import styled from "styled-components";

export const ArtworkList = styled("ul")`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[4] / 16}rem;
`;
ArtworkList.displayName = "ArtworkList";
