import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from '@emotion/styled';
import { Thumbnail } from './thumbnail';

const Link = styled(GatsbyLink)`
  display: block;
  outline: none;
  text-decoration: none;
  position: relative;
  text-decoration: none;
  transition: color 0.5s ease;
  color: black;
  &::after,
  &::after {
    content: '';
    position: absolute;
    left: -3px;
    right: -3px;
    bottom: -3px;
    top: -3px;
    border: 1px solid transparent;
    transition: border-color 0.3s ease;
  }
  &:visited {
    color: inherit;
  }
  &:hover,
  &:focus {
    color: darkred;
  }
  &:hover::after,
  &:focus::after {
    border-color: black;
  }
`;

export const ThumbnailLink = ({ url, title, imageFileName }) => (
  <Link to={url}>
    <Thumbnail fileName={imageFileName} altCopy={title} />
    <em>{title}</em>
  </Link>
);
