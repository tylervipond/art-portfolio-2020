import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { ArtworkTitle } from '../components/artwork-title/artwork-title'
import { ArtworkDetail } from '../components/artwork-detail/artwork-detail'

export default function Template({data}) {
  const {sculpture} = data;
  return (
    <Layout>
      <ArtworkTitle>{sculpture.title}</ArtworkTitle>
      <ArtworkDetail>{sculpture.year}</ArtworkDetail>
      <ArtworkDetail>{sculpture.size}</ArtworkDetail>
      <ArtworkDetail>{sculpture.media}</ArtworkDetail>
      <pre>{JSON.stringify(sculpture)}</pre>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    sculpture(path: { eq: $path }) {
      title
      year
      size
      media
      image
    }
  }
`
