import React from 'react';

import PropTypes from 'prop-types';

export const DailyAvatar = ({ src, alt, size, border }) => {
  return (
    <img
        src={src}
        alt={alt}
        className={`${size} ${border} inline-block rounded-full object-cover object-center`}
    />
  );
};

DailyAvatar.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    size: PropTypes.string,
    border: PropTypes.string,
};

DailyAvatar.defaultProps = {
    src: 'https://docs.material-tailwind.com/img/face-2.jpg',
    alt: '',
    size: '',
    border: '',
};
