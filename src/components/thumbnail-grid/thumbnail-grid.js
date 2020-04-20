import styled from '@emotion/styled';
import { SPACE_MEDIUM } from '../../styles/spaceing-scale';

export const ThumbnailGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: ${SPACE_MEDIUM};
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
