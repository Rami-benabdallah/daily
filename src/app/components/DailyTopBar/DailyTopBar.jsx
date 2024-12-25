import React from 'react';

import PropTypes from 'prop-types';

export const DailyTopBar = ({  }) => {
  return (
    <div className='bg-sideBarBg w-full h-24 p-4'>
        Hello
    </div>
  );
};

const modeToBgColor = {
  dark: 'bg-dark text-light',
  light: 'bg-light text-dark border border-dark',
};

const modeToIconFillColor = {
    dark: 'text-fill-light',
    light: 'text-fill-dark',
  };


DailyTopBar.propTypes = {

};

DailyTopBar.defaultProps = {

};
