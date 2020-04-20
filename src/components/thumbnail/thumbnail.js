import React from 'react';
import { format_cloudinary_url } from '../../cloudinary_utils';

export const Thumbnail = ({ fileName, altCopy }) => (
  <img
    src={format_cloudinary_url(fileName, ['w_150', 'h_150', 'c_fill'])}
    alt={altCopy}
  />
);
