import { css } from '@emotion/core';
import React from 'react';

import { SPACE_MEDIUM, asRem } from '../styles';
import { PageTitle } from './page-title';
import { ThumbnailGrid } from './thumbnail-grid';
import { ThumbnailLink } from './thumbnail-link';

export const ThumbnailSection = ({ artworks, title }) => (
  <>
    <PageTitle
      css={css`
        margin-bottom: ${asRem(SPACE_MEDIUM)};
      `}
    >
      {title}
    </PageTitle>
    <ThumbnailGrid>
      {artworks.map(artwork => (
        <li key={artwork.title}>
          <ThumbnailLink
            url={artwork.path}
            title={artwork.title}
            imageFileName={artwork.image[0]}
          ></ThumbnailLink>
        </li>
      ))}
    </ThumbnailGrid>
  </>
);
