const CLOUD_NAME = 'dgfapv7ud';

/**
 * transforms a filename and some transforms into a cloudinary url
 * @param {string} filename
 * @param {string[]} transforms
 */
export const format_cloudinary_url = (filename, transforms) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/${
    transforms && transforms.length ? transforms.join(',') + '/' : ''
  }${filename}`;
