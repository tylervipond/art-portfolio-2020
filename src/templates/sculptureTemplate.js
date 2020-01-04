import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout';

export default function Template({data}) {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  return (  
    <Layout>
      <PageTitle>{frontmatter.title}</PageTitle>
      <pre>{JSON.stringify(frontmatter)}</pre>
    </Layout>
  );
}

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         title
//         year
//         size
//         media
//         image
//       }
//     }
//   }
// `
