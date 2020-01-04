import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageTitle } from '../components/page-title/page-title'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Home" />
    <PageTitle>Works</PageTitle>
    {/* {edges.map(({ node }) => (
      <Link key={node.id} to={node.frontmatter.path}>
        {node.frontmatter.title}
      </Link>
    ))} */}
  </Layout>
)

export default IndexPage

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___order] }) {
//       edges {
//         node {
//           id
//           frontmatter {
//             path
//             title
//             image
//           }
//         }
//       }
//     }
//   }
// `
