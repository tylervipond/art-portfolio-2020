import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';
import zigzag from '!file-loader!../../../assets/images/zigzag.svg';
import { SPACE_SMALL } from '../../styles/spaceing-scale';

export const Link = styled(GatsbyLink)`
  color: inherit;
  text-decoration: none;
  position: relative;
  &:hover::after,
  &:focus::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -${SPACE_SMALL};
    height: 9px;
    background-image: url(${zigzag});
  }
`;
