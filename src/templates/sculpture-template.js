import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { ArtworkTitle } from '../components/artwork-title/artwork-title'
import { ArtworkDetail } from '../components/artwork-detail/artwork-detail'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout>
      <ArtworkTitle>{frontmatter.title}</ArtworkTitle>
      <ArtworkDetail>{frontmatter.year}</ArtworkDetail>
      <ArtworkDetail>{frontmatter.size}</ArtworkDetail>
      <ArtworkDetail>{frontmatter.media}</ArtworkDetail>
      <pre>{JSON.stringify(frontmatter)}</pre>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        year
        size
        media
        image
      }
    }
  }
`
