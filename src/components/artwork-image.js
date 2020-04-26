import React from 'react';
import { css } from '@emotion/core';

import { format_cloudinary_url } from '../cloudinary_utils';
import {
  SCREEN_SIZE_MEDIUM,
  SCREEN_SIZE_EXTRA_LARGE,
  SCREEN_SIZE_LARGE,
  SIZE_ARTWORK_SCREEN_SMALL,
  SIZE_ARTWORK_SCREEN_MEDIUM,
  SIZE_ARTWORK_SCREEN_LARGE,
  SIZE_ARTWORK_SCREEN_EXTRA_LARGE,
  asPx,
} from '../styles';

export const ArtworkImage = ({ fileName, altCopy }) => (
  <img
    css={css`
      display: block;
      width: 100%;
    `}
    srcSet={`
        ${format_cloudinary_url(fileName, [
          `w_${SIZE_ARTWORK_SCREEN_SMALL}`,
          `h_${SIZE_ARTWORK_SCREEN_SMALL}`,
          'c_fit',
          'f_auto',
        ])} ${SIZE_ARTWORK_SCREEN_SMALL}w,
        ${format_cloudinary_url(fileName, [
          `w_${SIZE_ARTWORK_SCREEN_MEDIUM}`,
          `h_${SIZE_ARTWORK_SCREEN_MEDIUM}`,
          'c_fit',
          'f_auto',
        ])} ${SIZE_ARTWORK_SCREEN_MEDIUM}w,
        ${format_cloudinary_url(fileName, [
          `w_${SIZE_ARTWORK_SCREEN_LARGE}`,
          `h_${SIZE_ARTWORK_SCREEN_LARGE}`,
          'c_fit',
          'f_auto',
        ])} ${SIZE_ARTWORK_SCREEN_LARGE}w,
        ${format_cloudinary_url(fileName, [
          `w_${SIZE_ARTWORK_SCREEN_EXTRA_LARGE}`,
          `h_${SIZE_ARTWORK_SCREEN_EXTRA_LARGE}`,
          'c_fit',
          'f_auto',
        ])} ${SIZE_ARTWORK_SCREEN_EXTRA_LARGE}w
    `}
    sizes={`
        ${asPx(SIZE_ARTWORK_SCREEN_SMALL)},
        (min-width: ${asPx(SCREEN_SIZE_MEDIUM)}) ${asPx(
      SIZE_ARTWORK_SCREEN_MEDIUM
    )},
        (min-width: ${asPx(SCREEN_SIZE_LARGE)}) ${asPx(
      SIZE_ARTWORK_SCREEN_LARGE
    )},
        (min-width: ${asPx(SCREEN_SIZE_EXTRA_LARGE)}) ${asPx(
      SIZE_ARTWORK_SCREEN_EXTRA_LARGE
    )},
        `}
    src={format_cloudinary_url(fileName, [
      `w_${SIZE_ARTWORK_SCREEN_EXTRA_LARGE}`,
      `h_${SIZE_ARTWORK_SCREEN_EXTRA_LARGE}`,
      'c_fit',
      'f_auto',
    ])}
    alt={altCopy}
  />
);
