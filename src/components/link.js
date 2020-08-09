import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';
import zigzag from '!file-loader!../../assets/images/zigzag.svg';
import { SPACE_SMALL, asRem, COLOR_TEXT_HOVER, COLOR_BLACK } from '../styles';

export const Link = styled(GatsbyLink)`
  color: inherit;
  text-decoration: none;
  position: relative;
  transition: color 0.5s ease;
  outline: none;
  &:visited {
    color: inherit;
  }
  &:hover,
  &:focus {
    color: ${COLOR_TEXT_HOVER};
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
  &:hover::after {
    opacity: 1;
  }
  &::before {
    position: absolute;
    content: '';
    left: -1px;
    right: -1px;
    top: -1px;
    bottom: -1px;
    border: 1px solid transparent;
  }
  &:focus::before {
    border-color: ${COLOR_BLACK};
  }
`;
