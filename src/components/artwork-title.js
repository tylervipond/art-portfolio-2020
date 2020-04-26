import styled from '@emotion/styled';

import { FONT_COPY, TYPE_FACE_COPY, COLOR_TEXT, asRem } from '../styles';

export const ArtworkTitle = styled.p`
  font-size: ${asRem(FONT_COPY)};
  font-family: ${TYPE_FACE_COPY};
  font-weight: bold;
  color: ${COLOR_TEXT};
  margin: 0;
`;
