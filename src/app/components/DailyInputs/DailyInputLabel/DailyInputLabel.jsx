import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DailyBadge } from '../../DailyBadge/DailyBadge';

import DailyClose from '@/app/assets/icons/DailyClose';

export const DailyInputLabel = ({ type, id, label, placeholder, name, register, setValue, getValues }) => {
  const [inputValue, setInputValue] = useState('');

  // Initialize the badges array in the form state if not already set
  React.useEffect(() => {
    setValue(name, getValues(name) || []);
  }, [name, setValue, getValues]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      const trimmedValue = inputValue.trim();
      const currentBadges = getValues(name) || [];

      if (currentBadges.includes(trimmedValue)) {
        // If the badge exists, remove it
        const updatedBadges = currentBadges.filter((badge) => badge !== trimmedValue);
        setValue(name, updatedBadges);
      } else {
        // Otherwise, add it
        setValue(name, [...currentBadges, trimmedValue]);
      }

      setInputValue('');
    }
  };

  const handleDeleteBadge = (indexToDelete) => {
    const currentBadges = getValues(name) || [];
    const updatedBadges = currentBadges.filter((_, index) => index !== indexToDelete);
    setValue(name, updatedBadges);
  };

  const badges = getValues(name) || [];

  return (
    <div>
      <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2 flex flex-col gap-2">
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          className="block w-full rounded-md bg-white px-3 py-1.5 pl-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
        />
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <DailyBadge
              key={index}
              label={badge}
              border="border border-light"
              bg="bg-primary text-light"
              padding="px-2 py-1"
              rounded="rounded-2xl"
              badgeColor="text-light"
              size="w-4 h-4"
              icon={DailyClose}
              onClick={() => handleDeleteBadge(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
