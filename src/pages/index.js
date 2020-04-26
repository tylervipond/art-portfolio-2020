import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { ThumbnailSection } from '../components/thumbnail-section';

const IndexPage = ({ data: { allSculpture } }) => (
  <Layout>
    <SEO title="Home" />
    {allSculpture.edges.length ? (
      <ThumbnailSection
        artworks={allSculpture.edges.map(({ node }) => node)}
        title="Sculpture"
      />
    ) : null}
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
