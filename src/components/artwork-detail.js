import styled from '@emotion/styled';

import { COLOR_TEXT, TYPE_FACE_COPY, FONT_COPY, asRem } from '../styles';

export const ArtworkDetail = styled.p`
  font-size: ${asRem(FONT_COPY)};
  font-family: ${TYPE_FACE_COPY};
  font-style: italic;
  color: ${COLOR_TEXT};
  margin: 0;
`;
