import styled from "styled-components";

export const ArtworkList = styled("ul")`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 240px));
  gap: ${({ theme }) => theme.spacing[4] / 16}rem;
  @media screen and (max-width: 1024px) {
    gap: ${({ theme }) => theme.spacing[2] / 16}rem;
    grid-template-columns: repeat(2, minmax(120px, 240px));
  }
`;
ArtworkList.displayName = "ArtworkList";
