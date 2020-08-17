import styled from '@emotion/styled';

import { FONT_COPY, TYPE_FACE_DISPLAY, COLOR_TEXT, asRem } from '../styles';

export const SectionTitle = styled.h3`
  font-size: ${asRem(FONT_COPY)};
  font-family: ${TYPE_FACE_DISPLAY};
  font-weight: bold;
  color: ${COLOR_TEXT};
  margin: ${props => props.margin || 0};
`;
