import React from 'react';

import PropTypes from 'prop-types';

export const DailyInput = ({ type, id, label, placeholder, name, icon: Icon, register  }) => {
    return (
      <div>
        <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
          {label}
        </label>
        <div className="mt-2 relative flex items-center">
          {Icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon className="w-5 h-5 text-gray-400" />
            </div>
          )}
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            className={`block w-full rounded-md bg-white px-3 py-1.5 ${Icon ? 'pl-10' : 'pl-3'} text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6`}
            {...register(name)}
          />
        </div>
      </div>
    );
  };

DailyInput.propTypes = {

};

DailyInput.defaultProps = {

};
