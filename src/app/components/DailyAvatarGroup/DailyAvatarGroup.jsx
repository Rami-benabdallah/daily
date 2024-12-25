import React from 'react';
import PropTypes from 'prop-types';

import { DailyAvatar } from '../DailyAvatar/DailyAvatar';

export const DailyAvatarGroup = ({ avatars, maxVisible}) => {
  const visibleAvatars = avatars.slice(0, maxVisible);
  const remainingCount = avatars.length - maxVisible;
  return (
    <div className="flex -space-x-2">
      {visibleAvatars.map((avatar, index) => (
        <DailyAvatar
          key={index}
          src={avatar.src}
          alt={avatar.alt}
          size={avatar.size}
        />
      ))}
      {remainingCount > 0 && (
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-sm text-gray-700 font-medium">
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

DailyAvatarGroup.propTypes = {
    avatars: PropTypes.array,
    maxVisible: PropTypes.number,
};

DailyAvatarGroup.defaultProps = {
    avatars: [],
    maxVisible: 2,
};
