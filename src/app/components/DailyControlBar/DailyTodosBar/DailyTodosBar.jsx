"use client"
import React, { useState } from 'react';

import { DailyIconButton } from '../../DailyIconButton/DailyIconButton';
import { DailyTodo } from '../../DailyTodo/DailyTodo';

import DailyDoubleArrowUp from '@/app/assets/icons/DailyDoubleArrowUp';
import DailyDoubleArrowDown from '@/app/assets/icons/DailyDoubleArrowDown';

import { dailyTodos } from '@/app/utils/MockData';
import next from 'next';

export const DailyTodosBar = ({ label, icon }) => {
  const [dailyTodosMock, setDailyTodos] = useState(dailyTodos);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  const handleNextSubTaskClick = (todoId, lastSubTask, nextSubTask) => {
    if(!lastSubTask) {
        if(dailyTodosMock.find((todo) => todo.subTask === nextSubTask)) {
            return;
        } 
        const clickedTodo = dailyTodosMock.find((todo) => todo.id === todoId);

        if (clickedTodo) {
          const newTask = {
            id: dailyTodosMock.length + 1,
            subTask: nextSubTask,
            lastSubTask: true,
            name: 'gym',
            progress: 0,
          };
    
          setDailyTodos((prevTodos) => [...prevTodos, newTask]);
        }
    }
  };

  return (
    <div className={`flex flex-col ${!isCollapsed ? 'flex-1' : ''}`}>
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
            <div className={`flex flex-col gap-4 transition-all duration-300 ease-in-out ${isCollapsed ? 'max-h-0' : 'max-h-[1000px]'} overflow-hidden`}>
                {dailyTodosMock.map((todo) => (
                    <DailyTodo
                        key={todo.id}
                        id={todo.id}
                        subTask={todo.subTask}
                        nextSubTask={todo.nextSubTask}
                        lastSubTask={todo.lastSubTask}
                        name={todo.name}
                        progress={todo.progress}
                        onNextSubTaskClick={() => handleNextSubTaskClick(todo.id, todo.lastSubTask, todo.nextSubTask)}
                    />
                ))}
            </div>
        </div>
    </div>

  );
};

DailyTodosBar.propTypes = {

};

DailyTodosBar.defaultProps = {

};
