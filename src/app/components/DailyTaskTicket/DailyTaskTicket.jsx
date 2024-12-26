"use client";
import React from 'react';

import PropTypes from 'prop-types';
import { DailyAvatarGroup } from '../DailyAvatarGroup/DailyAvatarGroup';
import { DailyDropdown } from '../DailyDropdown/DailyDropdown';
import { DailyBadge } from '../DailyBadge/DailyBadge';

import { menuItems } from '@/app/utils/MockData';

import DailyCheck from '@/app/assets/icons/DailyCheck';

export const DailyTaskTicket = ({ task }) => {
  return (
    <div className="bg-light flex flex-col gap-4 p-4 rounded-2xl cursor-pointer">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-2 text-sm font-medium truncate w-full">
          {task.labels.map((label, index) => (
            <DailyBadge
              key={index}
              label={label}
              border='border border-light'
              bg='bg-primary text-light'
              padding='px-2 py-1'
              rounded='rounded-2xl'
            />
          ))}
        </span>
        <DailyDropdown mode="transparent" padding="p-0" size="w-6 h-6" menuItems={menuItems} />
      </div>
      <span className="line-clamp-2">{task.title}</span>
      <DailyBadge
        label={task.dueDate}
        border='border border-gray-200'
        padding='px-4 py-1'
        rounded='rounded-2xl'
      />
      <div className="flex items-center justify-between">
        {task.assignees?.length > 0 && (
          <DailyAvatarGroup avatars={task.assignees} maxVisible="4" />
        )}
        <div className="ml-auto flex items-center gap-2 justify-center">
          <DailyCheck className={`w-8 h-8 ${task.progress.completed === task.progress.total ? 'text-green-500' : 'text-gray-500'}`}
          />
          <span className={`${task.progress.completed === task.progress.total ? 'text-green-500' : 'text-gray-500'}`}>
            {task.progress.completed}/{task.progress.total}
          </span>
        </div>
      </div>
    </div>
  );
};

DailyTaskTicket.propTypes = {
  task: PropTypes.array,
};

DailyTaskTicket.defaultProps = {
};
