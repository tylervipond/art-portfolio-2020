import React from 'react';

export const Thumbnail = ({ imageUrl, altCopy }) => (
  <img src={`${imageUrl}`} alt={altCopy} />
);
