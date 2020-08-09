import React from 'react';
import { css } from '@emotion/core';
import { format_cloudinary_url } from '../cloudinary_utils';
import {
  SCREEN_SIZE_MEDIUM,
  SCREEN_SIZE_LARGE,
  SCREEN_SIZE_EXTRA_LARGE,
  SIZE_THUMBNAIL_SCREEN_SMALL,
  SIZE_THUMBNAIL_SCREEN_MEDIUM,
  SIZE_THUMBNAIL_SCREEN_LARGE,
  SIZE_THUMBNAIL_SCREEN_EXTRA_LARGE,
  asPx,
} from '../styles';

export const Thumbnail = ({ fileName, altCopy }) => (
  <img
    css={css`
      display: block;
      width: 100%;
    `}
    srcSet={`
        ${format_cloudinary_url(fileName, [
          `w_${SIZE_THUMBNAIL_SCREEN_SMALL}`,
          `h_${SIZE_THUMBNAIL_SCREEN_SMALL}`,
          'c_fill',
          'f_auto',
        ])} ${SIZE_THUMBNAIL_SCREEN_SMALL}w,
        ${format_cloudinary_url(fileName, [
          `w_${SIZE_THUMBNAIL_SCREEN_MEDIUM}`,
          `h_${SIZE_THUMBNAIL_SCREEN_MEDIUM}`,
          'c_fill',
          'f_auto',
        ])} ${SIZE_THUMBNAIL_SCREEN_MEDIUM}w,
        ${format_cloudinary_url(fileName, [
          `w_${SIZE_THUMBNAIL_SCREEN_LARGE}`,
          `h_${SIZE_THUMBNAIL_SCREEN_LARGE}`,
          'c_fill',
          'f_auto',
        ])} ${SIZE_THUMBNAIL_SCREEN_LARGE}w,
        ${format_cloudinary_url(fileName, [
          `w_${SIZE_THUMBNAIL_SCREEN_EXTRA_LARGE}`,
          `h_${SIZE_THUMBNAIL_SCREEN_EXTRA_LARGE}`,
          'c_fill',
          'f_auto',
        ])} ${SIZE_THUMBNAIL_SCREEN_EXTRA_LARGE}w
    `}
    sizes={`
        ${SIZE_THUMBNAIL_SCREEN_SMALL}px,
        (min-width: ${asPx(SCREEN_SIZE_MEDIUM)}) ${asPx(
      SIZE_THUMBNAIL_SCREEN_MEDIUM
    )},
        (min-width: ${asPx(SCREEN_SIZE_LARGE)}) ${asPx(
      SIZE_THUMBNAIL_SCREEN_LARGE
    )},
        (min-width: ${asPx(SCREEN_SIZE_EXTRA_LARGE)}) ${asPx(
      SIZE_THUMBNAIL_SCREEN_EXTRA_LARGE
    )},
    `}
    src={format_cloudinary_url(fileName, [
      `w_${SIZE_THUMBNAIL_SCREEN_EXTRA_LARGE}`,
      `h_${SIZE_THUMBNAIL_SCREEN_EXTRA_LARGE}`,
      'c_fill',
      'f_auto',
    ])}
    alt={altCopy}
  />
);
