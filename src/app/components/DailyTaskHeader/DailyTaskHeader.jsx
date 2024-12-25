"use client"
import React from 'react';
import PropTypes from 'prop-types';
import { useModal } from '@/app/hooks/useModal';

import { DailyIconButton } from '../DailyIconButton/DailyIconButton';
import { DailyModal } from '../DailyModal/DailyModal';
import { DailyInput } from '../DailyInputs/DailyInput/DailyInput';
import { DailyInputArea } from '../DailyInputs/DailyInputArea/DailyInputArea';
import { DailyInputLabel } from '../DailyInputs/DailyInputLabel/DailyInputLabel';



import DailyDots from '@/app/assets/icons/DailyDots';
import DailyPlus from '@/app/assets/icons/DailyPlus';

export const DailyTaskHeader = ({ label }) => {
    const { isModalOpen, openModal, closeModal } = useModal();

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
            mainButtonLabel='Save' 
            showSecondaryButton={true} 
            secondaryButtonLabel='Cancel'
        >
            <div className='flex flex-col gap-4'>
                <DailyInput
                    type="text"
                    id="task-title"
                    name="task-title"
                    label="Title"
                    placeholder="Enter the title"
                />
                <DailyInputArea
                    type="description"
                    id="task-description"
                    name="task-description"
                    label="Description"
                    placeholder="Enter the description"
                />
                <DailyInputLabel
                    type="labels"
                    id="task-labels"
                    name="task-labels"
                    label="Labels"
                    placeholder="Enter the labels"
                />
            </div>
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
