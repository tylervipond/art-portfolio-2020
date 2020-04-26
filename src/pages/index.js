import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { ThumbnailSection } from '../components/thumbnail-section';

const IndexPage = ({ data: { allSculpture, allCollage } }) => (
  <Layout>
    <SEO title="Home" />
    {allSculpture.edges.length ? (
      <ThumbnailSection
        artworks={allSculpture.edges.map(({ node }) => node)}
        title="Sculpture"
      />
    ) : null}
    {allCollage.edges.length ? (
      <ThumbnailSection
        artworks={allCollage.edges.map(({ node }) => node)}
        title="Collage"
      />
    ) : null}
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    allCollage {
      edges {
        node {
          path
          title
          image
          order
        }
      }
    }
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
