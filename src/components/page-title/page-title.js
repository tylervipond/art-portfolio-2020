import styled from '@emotion/styled';
import { FONT_SIZE_3 } from '../../styles/font-scale';
import { TYPE_FACE_DISPLAY } from '../../styles/type-faces';
import { COLOR_TEXT } from '../../styles/colors';

export const PageTitle = styled.h2`
  font-size: ${FONT_SIZE_3};
  font-family: ${TYPE_FACE_DISPLAY};
  color: ${COLOR_TEXT};
  margin: 0;
`;