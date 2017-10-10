import PropTypes from 'prop-types';
import React from 'react';

const srcSet = (srcs, naturalWidth) =>
  srcs.map((src, index) => `${src} ${naturalWidth * (index + 1)}w`).join(', ');

const RetinaImage = ({ naturalWidth, srcs, ...restProps }) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <img
    {...restProps}
    src={srcs[0]}
    srcSet={srcSet(srcs, naturalWidth)}
    sizes={`(min-width: ${naturalWidth}px) ${naturalWidth}px, 100vw`}
  />
);

RetinaImage.propTypes = {
  naturalWidth: PropTypes.number.isRequired,
  srcs: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default RetinaImage;
