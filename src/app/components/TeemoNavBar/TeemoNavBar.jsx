import React from 'react';

import PropTypes from 'prop-types';

import { TeemoNavBarItem } from '../TeemoNavBarItem/TeemoNavBarItem';

export const TeemoNavBar = ({ items }) => {
    const navBarItems = ['HOME', 'ALL PRODUCTS', 'BOYS', 'GIRLS', 'BABY'];

  return (
    <div className='flex w-full justify-start items-center h-16'>
        {navBarItems.map((label, index) => (
            <TeemoNavBarItem key={index} label={label} />
        ))}
    </div>
  );
};

TeemoNavBar.propTypes = {
    items: PropTypes.object,

};

TeemoNavBar.defaultProps = {
    items: {},
};
