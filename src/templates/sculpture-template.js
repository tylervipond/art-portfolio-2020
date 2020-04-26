import React from 'react';
import { graphql } from 'gatsby';

import { ArtworkPage } from '../components/artwork-page';

export default function Template({ data }) {
  const { sculpture } = data;
  return <ArtworkPage {...sculpture} />;
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
