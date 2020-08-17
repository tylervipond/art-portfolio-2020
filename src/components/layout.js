/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import {
  SPACE_MEDIUM,
  SPACE_LARGE,
  SIZE_CONTENT_LARGE,
  SIZE_CONTENT_EXTRA_LARGE,
  SCREEN_SIZE_EXTRA_LARGE,
  asRem,
  asPx,
  SPACE_SMALL,
  SPACE_EXTRA_LARGE,
} from '../styles';
import Header from './header';
import './layout.css';

const PageWrapper = styled.div`
  margin: 0 auto;
  max-width: ${asRem(SIZE_CONTENT_LARGE)};
  padding: 0px ${asRem(SPACE_MEDIUM)} ${asRem(SPACE_EXTRA_LARGE)};
  min-height: 100vh;
  position:relative;
  @media (min-width: ${asPx(SCREEN_SIZE_EXTRA_LARGE)}) {
    max-width: ${asRem(SIZE_CONTENT_EXTRA_LARGE)};
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <PageWrapper>
        <Header margin={`${asRem(SPACE_SMALL)} 0 ${asRem(SPACE_MEDIUM)}`} siteTitle={data.site.siteMetadata.title} />
        <main
          css={css`
            margin-bottom: ${asRem(SPACE_MEDIUM)};
          `}
        >
          {children}
        </main>
        <footer css={css`position: absolute; left: ${asRem(SPACE_MEDIUM)}; right: ${asRem(SPACE_MEDIUM)}; bottom: 0`}>
          <p>Tyler Vipond, 2020</p>
        </footer>
      </PageWrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
