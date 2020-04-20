import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { ArtworkTitle } from '../components/artwork-title/artwork-title';
import { ArtworkDetail } from '../components/artwork-detail/artwork-detail';
import { format_cloudinary_url } from '../cloudinary_utils';

export default function Template({ data }) {
  const { sculpture } = data;
  return (
    <Layout>
      {sculpture.image.map(fileName => (
        <img
          key={fileName}
          src={format_cloudinary_url(fileName)}
          alt={sculpture.title}
        ></img>
      ))}
      <ArtworkTitle>{sculpture.title}</ArtworkTitle>
      <ArtworkDetail>{sculpture.year}</ArtworkDetail>
      <ArtworkDetail>{sculpture.size}</ArtworkDetail>
      <ArtworkDetail>{sculpture.media}</ArtworkDetail>
    </Layout>
  );
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
`;
