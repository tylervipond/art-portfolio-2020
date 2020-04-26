import { css } from '@emotion/core';
import React from 'react';
import { graphql } from 'gatsby';

import { ArtworkDetail } from '../components/artwork-detail';
import { ArtworkTitle } from '../components/artwork-title';
import { ArtworkImage } from '../components/artwork-image';
import Layout from '../components/layout';

export default function Template({ data }) {
  const { sculpture } = data;
  return (
    <Layout>
      <ArtworkTitle>{sculpture.title}</ArtworkTitle>
      <div
        css={css`
          display: flex;
        `}
      >
        <ArtworkDetail>{sculpture.media},&nbsp;</ArtworkDetail>
        <ArtworkDetail>{sculpture.size},&nbsp;</ArtworkDetail>
        <ArtworkDetail>{sculpture.year}</ArtworkDetail>
      </div>
      {sculpture.image.map(fileName => (
        <ArtworkImage
          key={fileName}
          fileName={fileName}
          altCopy={sculpture.title}
        />
      ))}
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
