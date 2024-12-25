"use client"
import React, { useState } from 'react';

import { DailyBadge } from '../DailyBadge/DailyBadge';
import { dailyTodos } from '@/app/utils/MockData';

export const DailyNote = ({ }) => {

  return (
    <div className='flex flex-col border border-gray-300 p-4 rounded-2xl cursor-pointer gap-4 shadow-md'>
        <span className="text-gray-500">
            Dec 10, 2024
        </span>
        <h1 className="text-2xl">
            IMPO INSPO TEMPLATE
        </h1>
        <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dui mi. Fusce varius bibendum ante, non lacinia. Fall usasc ce variu slorem ipsum dolor sit amet
        </p>
        <div className="flex gap-2">
            {dailyTodos.map((todo) => (
                <DailyBadge 
                    key={todo.id} 
                    label="hello" 
                    border='border border-light'
                    bg='bg-primary text-light'
                    padding='px-2 py-1'
                    rounded='rounded-2xl'
                    badgeColor="text-light"
                    size='w-4 h-4'
                />
            ))}   
        </div>
  </div>
  );
};

const modeToBgColor = {
};

const modeToIconFillColor = {
  };


 DailyNote.propTypes = {

};

DailyNote.defaultProps = {

};
