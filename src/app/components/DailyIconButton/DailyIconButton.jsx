import React from 'react';

import PropTypes from 'prop-types';

export const DailyIconButton = ({ mode, active, hoverEffects, disabled, icon: Icon, extraColor, size, rounded, showLabel, label, customWidth, customPadding, onClick }) => {
    const bgColor = modeToBgColor[mode] || 'bg-gray-900';
    const fillColor = modeToIconFillColor[mode] || extraColor;

  return (
    <button 
        className={`${showLabel ? 'w-52' : customWidth} ${customPadding ? customPadding : 'p-4'}  ${bgColor} ${hoverEffects} ${rounded} ${active ? 'bg-primary text-light' : ''} ${disabled ? 'cursor-not-allowed' : ''}`}
        onClick={onClick}
        disabled={disabled}
    >
      <div className='flex items-center'>
        {Icon && (
            <Icon className={`${fillColor} ${size}`} />
          )}
          {showLabel && label && (
            <span className='ml-4'>
              {label}
            </span>
          )}
      </div>
    </button>
  );
};

const modeToBgColor = {
  primary: 'bg-hoverPrimary text-primary',
  dark: 'bg-dark text-light',
  light: 'bg-light text-dark border border-dark',
  sky: 'bg-sky text-primary border-gray-400',
  gray: 'text-gray-400',
  transparent: 'bg-transaprent'
};

const modeToIconFillColor = {
    primary: 'text-fill-primary',
    dark: 'text-fill-light',
    light: 'text-fill-dark',
    sky: 'text-fill-primary',
    gray: 'text-fill-gray-400',
    transparent: 'text-fill-light'
  };


  DailyIconButton.propTypes = {
    mode: PropTypes.string,
    active: PropTypes.boolean,
    disabled: PropTypes.boolean,
    icon: PropTypes.string,
    extraColor: PropTypes.string,
    size: PropTypes.string,
    rounded: PropTypes.string,
    hoverEffects: PropTypes.string,
    showLabel: PropTypes.boolean,
    label: PropTypes.string,
    customWidth: PropTypes.string,
    customPadding: PropTypes.string,

    onClick: PropTypes.func,
};

DailyIconButton.defaultProps = {
    mode: 'dark',
    active: false,
    hoverEffects: '',
    disabled: false,
    icon: '',
    extraColor: '',
    size: 'w-6 h-6',
    rounded: '',
    showLabel: false,
    label: '',
    customWidth: 'w-16',
    customPadding: '',

    onClick: undefined,
};
