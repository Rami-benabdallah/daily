import React from 'react';

import { DailyIconButton } from '../components/DailyIconButton/DailyIconButton';
import { DailyTaskHeader } from '../components/DailyTaskHeader/DailyTaskHeader';
import { DailyTaskTicket } from '../components/DailyTaskTicket/DailyTaskTicket';

import DailyPlus from '../assets/icons/DailyPlus';

import { backlogTasks } from '@/app/utils/MockData';
import { inProgressTasks } from '@/app/utils/MockData';
import { reviewTasks } from '@/app/utils/MockData';
import { doneTasks } from '@/app/utils/MockData';

const TasksPage = () => {
    return (
    <div className='flex flex-col gap-10'>
        <div className='w-full flex justify-between'>
          <h1 className='text-3xl'>
            My tasks
          </h1>
          <div className='flex items-center justify-center gap-4'>
            <span className='text-2xl'>
              +6
            </span>
            <DailyIconButton
              mode="sky"
              icon={DailyPlus}
              size="w-6 h-6"
              rounded="rounded-full"
              customWidth="w-fit"
            />
          </div>
        </div>
        <div className='grid grid-cols-3 gap-6 w-full'>
          <div className='flex flex-col gap-6'>
            <DailyTaskHeader label="Open" />
            {backlogTasks.map((task, index) => (
                <DailyTaskTicket key={index} task={task} />
            ))}
          </div>
          <div className='flex flex-col gap-6'>
            <DailyTaskHeader label="In Progress" />
            {inProgressTasks.map((task, index) => (
                <DailyTaskTicket key={index} task={task} />
            ))}
          </div>
          <div className='flex flex-col gap-6'>
            <DailyTaskHeader label="Done" />
            {doneTasks.map((task, index) => (
                <DailyTaskTicket key={index} task={task} />
            ))}
          </div>
        </div>
    </div>
  );
};

const modeToBgColor = {
  dark: 'bg-dark text-light',
  light: 'bg-light text-dark border border-dark',
};

const modeToIconFillColor = {
    dark: 'text-fill-light',
    light: 'text-fill-dark',
  };


TasksPage.propTypes = {

};

TasksPage.defaultProps = {

};

export default TasksPage;
