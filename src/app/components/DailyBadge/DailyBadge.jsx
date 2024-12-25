import React from 'react';

import PropTypes from 'prop-types';

export const DailyBadge = ({ label, bg, badgeColor, size, border, borderColor, padding, rounded, icon: Icon, onClick }) => {
    return (
        <span className={`flex items-center gap-2 ${bg} ${border} ${padding} ${rounded} ${borderColor} w-fit`}>
            {label}
            {Icon && <Icon className={`${badgeColor} ${size} cursor-pointer`} onClick={onClick} />}
        </span>
    );
  };

DailyBadge.propTypes = {
    label: PropTypes.string,
    border: PropTypes.string,
    borderColor: PropTypes.string,
    bg: PropTypes.string,
    textColor: PropTypes.string,
    size: PropTypes.string,
    padding: PropTypes.string,
    rounded: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
};

DailyBadge.defaultProps = {
    label: 'hello',
    border: 'rounded-2xl',
    borderColor: 'bg-red-500',
    bg: 'border-gray-400',
    badgeColor: 'text-light',
    size: 'w-4 h-4',
    padding: 'px-4 py-1 ',
    rounded: '',
    icon: '',
    onClick: '',
};