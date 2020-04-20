import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageTitle } from '../components/page-title/page-title';
import { ThumbnailGrid } from '../components/thumbnail-grid/thumbnail-grid';
import { css } from '@emotion/core';
import { SPACE_MEDIUM } from '../styles/spaceing-scale';
import { ThumbnailLink } from '../components/thumbnail-link/thumbnail-link';

const IndexPage = ({
  data: {
    allSculpture: { edges },
  },
}) => (
  <Layout>
    <SEO title="Home" />
    <PageTitle
      css={css`
        margin-bottom: ${SPACE_MEDIUM};
      `}
    >
      Sculpture
    </PageTitle>
    <ThumbnailGrid>
      {edges.map(({ node }) => (
        <li>
          <ThumbnailLink
            key={node.id}
            url={node.path}
            title={node.title}
            imageFileName={node.image[0]}
          ></ThumbnailLink>
        </li>
      ))}
    </ThumbnailGrid>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    allSculpture {
      edges {
        node {
          path
          title
          image
          order
        }
      }
    }
  }
`;
