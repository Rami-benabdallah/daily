import React from 'react';

import PropTypes from 'prop-types';

export const DailyInputArea = ({ type, id, label, placeholder, name, register }) => {
    return (
      <div>
            <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <textarea
                  id={id}
                  name={name}
                  placeholder={placeholder}
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  {...register(name)}
                />
            </div>
      </div>
    );
  };

DailyInputArea.propTypes = {

};

DailyInputArea.defaultProps = {

};
