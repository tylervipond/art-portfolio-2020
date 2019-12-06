import styled from '@emotion/styled';

import { COLOR_TEXT } from '../../styles/colors';
import { FONT_SIZE_4 } from '../../styles/font-scale';
import { TYPE_FACE_DISPLAY } from '../../styles/type-faces';

export const AppTitle = styled.h1`
  font-size: ${FONT_SIZE_4};
  font-family: ${TYPE_FACE_DISPLAY};
  color: ${COLOR_TEXT};
  margin: 0;
`;
