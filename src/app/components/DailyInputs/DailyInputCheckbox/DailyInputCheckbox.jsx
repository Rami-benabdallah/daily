import React from 'react';
import PropTypes from 'prop-types';

export const DailyInputCheckbox = ({ id, label, name, checked, onChange }) => {
  return (
    <div className="flex items-center cursor-pointer">
      <input
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className={`h-5 w-5 rounded border-gray-300 cursor-pointer appearance-none ${checked ? 'bg-primary border-red-300' : 'bg-white border-red-300'} 
        checked:bg-primary`}
    />      
      <label htmlFor={id} className={`ml-2 text-sm font-medium text-gray-900 cursor-pointer ${checked ? 'line-through' : ''}`}>
        {label}
      </label>
    </div>
  );
};

DailyInputCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

DailyInputCheckbox.defaultProps = {
  checked: false,
  onChange: () => {},
};
