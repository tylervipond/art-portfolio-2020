import styled from "styled-components";

export const ProjectFeatureList = styled("ul")`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: grid;
  grid-auto-flow: row;
  gap: ${({ theme }) => theme.spacing[4] / 16}rem;
`;
ProjectFeatureList.displayName = "ProjectFeatureList";
