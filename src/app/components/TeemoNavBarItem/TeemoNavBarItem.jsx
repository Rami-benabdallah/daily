import React from 'react';

import PropTypes from 'prop-types';

export const TeemoNavBarItem = ({ label, href  }) => {

  return (
    <a className='px-4 py-2 cursor-pointer rounded-2xl hover:bg-purpleHover hover:text-light' href={href}>
        {label}
    </a>
  );
};

TeemoNavBarItem.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,

  /** Optional click handler */
  onClick: PropTypes.func,
};

TeemoNavBarItem.defaultProps = {
    label: 'test',
    href: 'test',
};
