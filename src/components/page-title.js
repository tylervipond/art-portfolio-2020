import styled from '@emotion/styled';
import {
  TYPE_FACE_DISPLAY,
  FONT_COPY,
  FONT_PAGE_TITLE,
  COLOR_TEXT,
  SCREEN_SIZE_MEDIUM,
  asRem,
  asPx,
} from '../styles';

export const PageTitle = styled.h2`
  font-size: ${asRem(FONT_COPY)};
  font-family: ${TYPE_FACE_DISPLAY};
  color: ${COLOR_TEXT};
  margin: 0;
  @media (min-width: ${asPx(SCREEN_SIZE_MEDIUM)}) {
    font-size: ${asRem(FONT_PAGE_TITLE)};
  }
`;
