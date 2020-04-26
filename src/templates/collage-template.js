import React from 'react';
import { graphql } from 'gatsby';

import { ArtworkPage } from '../components/artwork-page';

export default function Template({ data }) {
  const { collage } = data;
  return <ArtworkPage {...collage} />;
}

export const pageQuery = graphql`
  query($path: String!) {
    collage(path: { eq: $path }) {
      title
      year
      size
      media
      image
    }
  }
`;
