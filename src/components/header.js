import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

import {
  SCREEN_SIZE_MEDIUM,
  SCREEN_SIZE_EXTRA_LARGE,
  SPACE_EXTRA_LARGE,
  SPACE_MEDIUM,
  SPACE_LARGE,
  SPACE_SMALL,
  SIZE_CONTENT_EXTRA_LARGE,
  SIZE_CONTENT_LARGE,
  asPx,
  asRem
} from '../styles';
import { Link } from './link';
import { AppTitle } from './app-title';

const HeaderWrapper = styled.header`
  max-width: ${asRem(SIZE_CONTENT_LARGE)};
  margin: ${props => props.margin || 0};
  ${Link} {
    margin-right: ${asRem(SPACE_MEDIUM)};
  }
  @media (min-width: ${asPx(SCREEN_SIZE_MEDIUM)}) {
    ${AppTitle} {
      display: inline-block;
      margin-right: ${asRem(SPACE_EXTRA_LARGE)};
      margin-bottom: 0;
    }
  }
  @media (min-width: ${asPx(SCREEN_SIZE_EXTRA_LARGE)}) {
    max-width: ${asRem(SIZE_CONTENT_EXTRA_LARGE)};
  }
`;

const Header = ({ siteTitle, margin }) => (
  <HeaderWrapper margin={margin}>
    <AppTitle>
      <Link to="/">{siteTitle}</Link>
    </AppTitle>
    <Link to="/">Works</Link>
    <Link to="/bio/">Bio</Link>
    <Link to="/cv/">CV</Link>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
