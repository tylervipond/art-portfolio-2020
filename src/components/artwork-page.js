import { css } from '@emotion/core';
import React from 'react';

import Layout from './layout';
import { ArtworkTitle } from './artwork-title';
import { ArtworkDetail } from './artwork-detail';
import { ArtworkImage } from './artwork-image';

export const ArtworkPage = ({ title, media, size, year, image }) => (
  <Layout>
    <ArtworkTitle>{title}</ArtworkTitle>
    <div
      css={css`
        display: flex;
      `}
    >
      <ArtworkDetail>{media},&nbsp;</ArtworkDetail>
      <ArtworkDetail>{size},&nbsp;</ArtworkDetail>
      <ArtworkDetail>{year}</ArtworkDetail>
    </div>
    {image.map(fileName => (
      <ArtworkImage key={fileName} fileName={fileName} altCopy={title} />
    ))}
  </Layout>
);
