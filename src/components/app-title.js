import styled from '@emotion/styled';

import {
  COLOR_TEXT,
  FONT_APP_TITLE,
  FONT_PAGE_TITLE,
  TYPE_FACE_DISPLAY,
  SCREEN_SIZE_MEDIUM,
  asPx,
  asRem,
} from '../styles';

export const AppTitle = styled.h1`
  font-size: ${asRem(FONT_PAGE_TITLE)};
  font-family: ${TYPE_FACE_DISPLAY};
  color: ${COLOR_TEXT};
  margin: 0;
  @media (min-width: ${asPx(SCREEN_SIZE_MEDIUM)}) {
    font-size: ${asRem(FONT_APP_TITLE)};
  }
`;
