"use client"
import React from 'react';

import { DailyNotesBar } from './DailyNotesBar/DailyNotesBar';
import { DailyTodosBar } from './DailyTodosBar/DailyTodosBar';

import DailyTodos from '@/app/assets/icons/DailyTodos';
import DailyNotes from '@/app/assets/icons/DailyNotes';

export const DailyControlBar = ({  }) => {
  return (
      <div className="bg-sideBarBg h-screen p-4 transition-all duration-300 ease-in-out w-[35rem] border-l border-gray-300 flex flex-col">
        <DailyTodosBar icon={DailyTodos} label="Sub taks"/>
        <DailyNotesBar icon={DailyNotes} label="Notes"/>
      </div>

  );
};

DailyControlBar.propTypes = {

};

DailyControlBar.defaultProps = {

};
