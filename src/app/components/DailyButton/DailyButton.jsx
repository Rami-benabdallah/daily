import React from 'react';

import PropTypes from 'prop-types';

export const DailyButton = ({ mode, label, disabled, icon: Icon, hasLeftIcon, hasRightIcon, extraColor, size, padding, rounded, onClick }) => {
    const bgColor = modeToBgColor[mode] || 'bg-gray-900';
    const fillColor = modeToIconFillColor[mode] || extraColor;

  return (
    <button 
        className={`${bgColor} ${padding} ${rounded} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={onClick}
        disabled={disabled}
    >
        <div className="flex items-center justify-center gap-4">
            {hasLeftIcon && Icon && (
              <Icon className={`${fillColor} ${size}`} />
            )}
            <span>
              {label}
            </span>
            {hasRightIcon && Icon && (
              <Icon className={`${fillColor} ${size}`} />
            )}
          </div>
    </button>
  );
};

const modeToBgColor = {
  primary: 'bg-primary text-light',
  dark: 'bg-dark text-light',
  light: 'bg-light text-dark border border-dark',
};

const modeToIconFillColor = {
    dark: 'text-fill-light',
    light: 'text-fill-dark',
  };


DailyButton.propTypes = {
    mode: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.boolean,
    icon: PropTypes.string,
    hasLeftIcon: PropTypes.bool,
    hasRightIcon: PropTypes.bool,
    extraColor: PropTypes.string,
    size: PropTypes.string,
    rounded: PropTypes.string,

    onClick: PropTypes.func,
};

DailyButton.defaultProps = {
    mode: 'dark',
    label: 'click me',
    disabled: false,
    icon: '',
    hasLeftIcon: false,
    hasRightIcon: false,
    extraColor: '',
    size: 'w-6 h-6',
    padding: 'py-2 px-4',
    rounded: 'rounded-md',

    onClick: undefined,
};
