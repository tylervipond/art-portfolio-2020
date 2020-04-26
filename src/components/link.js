import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';
import zigzag from '!file-loader!../../assets/images/zigzag.svg';
import { SPACE_SMALL, asRem } from '../styles';

export const Link = styled(GatsbyLink)`
  color: inherit;
  text-decoration: none;
  position: relative;
  transition: color 0.5s ease;
  &:visited {
    color: inherit;
  }
  &:hover,
  &:focus {
    color: darkred;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -${asRem(SPACE_SMALL)};
    height: 9px;
    background-image: url(${zigzag});
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:hover::after,
  &:focus::after {
    opacity: 1;
  }
`;
