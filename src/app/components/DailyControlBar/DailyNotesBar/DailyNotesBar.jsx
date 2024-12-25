"use client"
import React, { useState } from 'react';

import { DailyIconButton } from '../../DailyIconButton/DailyIconButton';
import { DailyNote } from '../../DailyNote/DailyNote';

import DailyDoubleArrowUp from '@/app/assets/icons/DailyDoubleArrowUp';
import DailyDoubleArrowDown from '@/app/assets/icons/DailyDoubleArrowDown';

import { dailyTodos } from '@/app/utils/MockData';

export const DailyNotesBar = ({ label, icon }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div className={`flex flex-col overflow-y-auto ${!isCollapsed ? 'flex-1' : 'h-1/2'}`}>
        <div className="flex flex-col">
            <div className='flex justify-between items-center border-b border-gray-200 mb-6'>
                <DailyIconButton
                    mode="transparent"
                    icon={icon}
                    rounded="rounded-2xl"
                    size="w-8 h-8"
                    label={label}
                    showLabel={true}
            />
                <DailyIconButton
                    mode="primary"
                    icon={isCollapsed ? DailyDoubleArrowDown : DailyDoubleArrowUp}
                    size="w-4 h-4"
                    rounded="rounded-2xl"
                    customWidth="w-fit"
                    onClick={handleToggleCollapse}
                />               
            </div>
            <div className={`flex flex-col gap-4 transition-all duration-300 ease-in-out ${isCollapsed ? 'max-h-0' : 'max-h-1/2'} overflow-hidden`}>
                {dailyTodos.map((todo) => (
                    <DailyNote
                        key={todo.id}
                        id={todo.id}
                        subTask={todo.subTask}
                        nextSubTask={todo.nextSubTask}
                        name={todo.name}
                        progress={todo.progress}
                    />
                ))}
            </div>
        </div>
    </div>

  );
};

DailyNotesBar.propTypes = {

};

DailyNotesBar.defaultProps = {

};
