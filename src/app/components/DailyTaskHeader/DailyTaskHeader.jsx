"use client"
import React from 'react';
import PropTypes from 'prop-types';
import { useModal } from '@/app/hooks/useModal';

import { DailyIconButton } from '../DailyIconButton/DailyIconButton';
import { DailyModal } from '../DailyModal/DailyModal';
import { DailyForm } from '../DailyForm/DailyForm';

import DailyDots from '@/app/assets/icons/DailyDots';
import DailyPlus from '@/app/assets/icons/DailyPlus';

import { dailyAddTaskFields } from '@/app/utils/MockData';

export const DailyTaskHeader = ({ label }) => {
    const { isModalOpen, openModal, closeModal } = useModal();

    const handleFormSubmit = (data) => {
        console.log('Form Submitted', data);
      };

  return (
    <div className='bg-light flex justify-between items-center p-4 rounded-2xl cursor-pointer'>
        <span>
            {label}
        </span>
        <div className='flex justify-center items-center gap-4'>
            <DailyIconButton
                mode="transparent"
                icon={DailyDots}
                size="w-6 h-6"
            />
            <DailyIconButton
                mode="primary"
                icon={DailyPlus}
                size="w-4 h-4"
                rounded="rounded-2xl"
                customWidth="w-fit"
                onClick={() => openModal('add-task')}
            />
        </div>
        <DailyModal
            name="add-task"
            title="Add New Task"
            isOpen={isModalOpen('add-task')}
            closeModal={() => closeModal('add-task')} 
            showMainButton={false}
            mainButtonLabel='Save' 
            showSecondaryButton={false} 
            secondaryButtonLabel='Cancel'
        >
            <DailyForm fields={dailyAddTaskFields} onSubmit={handleFormSubmit} onCancel={() => closeModal('add-task')}  />
        </DailyModal>
    </div>
  );
};

DailyTaskHeader.propTypes = {
    label: PropTypes.string,
};

DailyTaskHeader.defaultProps = {
    label: 'test'
};
