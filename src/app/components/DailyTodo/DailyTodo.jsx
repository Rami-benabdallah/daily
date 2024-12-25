"use client"
import React, { useState } from 'react';

import { DailyInputCheckbox } from '../DailyInputs/DailyInputCheckbox/DailyInputCheckbox';
import { DailyProgressBar } from '../DailyProgressBar/DailyProgressBar';

import DailyArrowBreadcrumb from '@/app/assets/icons/DailyArrowBreadcrumb';

export const DailyTodo = ({ id, subTask, name, progress, nextSubTask, lastSubTask, onNextSubTaskClick }) => {
  const [progressState, setProgressState] = useState(progress);
  const [isChecked, setIsChecked] = useState(progress === 100);

  // Update isChecked whenever progress changes
  const handleProgressChange = (newProgress) => {
    setProgressState(newProgress);
    setIsChecked(newProgress === 100);
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    // Update progress to 100 if checked, or reset to 0 if unchecked
    const newProgress = checked ? 100 : 0;
    setProgressState(newProgress);
    // Pass the new progress value to the progress bar
    handleProgressChange(newProgress);
  };

  return (
    <div className='flex flex-col bg-hoverPrimary border border-gray-300 p-4 rounded-2xl cursor-pointer'>
        <DailyInputCheckbox
          id={id}
          label={subTask}
          name={name}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className='flex items-center ml-9 mt-2'>
          <DailyArrowBreadcrumb />
          <span className='ml-4 text-sm text-gray-500' onClick={onNextSubTaskClick}>
            {lastSubTask ? 'TASK COMPLETE' : nextSubTask}
          </span>
        </div>
        <div className='flex justify-between items-center w-full mt-4'>
          <DailyProgressBar 
            initialPercentage={progressState}
            onChange={handleProgressChange}
          />
        </div>
  </div>
  );
};

const modeToBgColor = {
};

const modeToIconFillColor = {
  };


DailyTodo.propTypes = {

};

DailyTodo.defaultProps = {

};
