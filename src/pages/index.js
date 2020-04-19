import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageTitle } from '../components/page-title/page-title';

const IndexPage = ({
  data: {
    allSculpture: { edges },
  },
}) => (
  <Layout>
    <SEO title="Home" />
    <PageTitle>Works</PageTitle>
    {edges.map(({ node }) => (
      <Link key={node.id} to={node.path}>
        <img src={node.image} />
        {node.title}
      </Link>
    ))}
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
