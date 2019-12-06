import styled from '@emotion/styled';
import { Link as GatsbyLink } from "gatsby"
import zigzag from '!file-loader!../../../assets/images/zigzag.svg';

export const Link = styled(GatsbyLink)`
  color: inherit;
  text-decoration: none;
  position: relative;
  &:hover::after, &:focus::after  {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.5rem;
    height: 9px;
    background-image: url(${zigzag})
  }
`;
