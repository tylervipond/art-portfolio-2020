import styled from '@emotion/styled';
import {
  SPACE_MEDIUM,
  SCREEN_SIZE_MEDIUM,
  SCREEN_SIZE_LARGE,
  SCREEN_SIZE_EXTRA_LARGE,
  SIZE_THUMBNAIL_SCREEN_SMALL,
  SIZE_THUMBNAIL_SCREEN_MEDIUM,
  SIZE_THUMBNAIL_SCREEN_LARGE,
  SIZE_THUMBNAIL_SCREEN_EXTRA_LARGE,
  asRem,
  asPx
} from '../styles';

export const ThumbnailGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${asRem(SIZE_THUMBNAIL_SCREEN_SMALL)}, 1fr)
  );
  grid-gap: ${asRem(SPACE_MEDIUM)};
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media (min-width: ${asPx(SCREEN_SIZE_MEDIUM)}) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(${asRem(SIZE_THUMBNAIL_SCREEN_MEDIUM)}, 1fr)
    );
  }
  @media (min-width: ${asPx(SCREEN_SIZE_LARGE)}) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(${asRem(SIZE_THUMBNAIL_SCREEN_LARGE)}, 1fr)
    );
  }
  @media (min-width: ${asPx(SCREEN_SIZE_EXTRA_LARGE)}) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(${asRem(SIZE_THUMBNAIL_SCREEN_EXTRA_LARGE)}, 1fr)
    );
  }
`;
