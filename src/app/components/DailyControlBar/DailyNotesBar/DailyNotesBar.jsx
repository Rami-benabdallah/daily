"use client"
import React, { useState } from 'react';
import { useModal } from '@/app/hooks/useModal';

import { DailyIconButton } from '../../DailyIconButton/DailyIconButton';
import { DailyNote } from '../../DailyNote/DailyNote';
import { DailyModal } from '../../DailyModal/DailyModal';
import { DailyForm } from '../../DailyForm/DailyForm';

import DailyDoubleArrowUp from '@/app/assets/icons/DailyDoubleArrowUp';
import DailyDoubleArrowDown from '@/app/assets/icons/DailyDoubleArrowDown';
import DailyPlus from '@/app/assets/icons/DailyPlus';

import { mockDailyNotes } from '@/app/utils/MockData';
import { dailyAddTaskFields } from '@/app/utils/MockData';

export const DailyNotesBar = ({ label, icon }) => {
    const { isModalOpen, openModal, closeModal } = useModal();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleToggleCollapse = () => {
        setIsCollapsed((prevState) => !prevState);
    };

    const handleFormSubmit = (data) => {
        console.log('Form Submitted', data);
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
                    <div className=' space-x-4'>
                        <DailyIconButton
                            mode="primary"
                            icon={DailyPlus}
                            size="w-4 h-4"
                            rounded="rounded-2xl"
                            customWidth="w-fit"
                            onClick={() => openModal('add-note')}
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
                </div>
                <div className={`flex flex-col gap-4 transition-all duration-300 ease-in-out ${isCollapsed ? 'max-h-0' : 'max-h-1/2'} overflow-hidden`}>
                    {mockDailyNotes.map((note) => (
                        <DailyNote
                            key={note.id}
                            id={note.id}
                            note={note}
                        />
                    ))}
                </div>
                <DailyModal
                    name="add-note"
                    title="Add New Note"
                    isOpen={isModalOpen('add-note')}
                    closeModal={() => closeModal('add-note')}
                    showMainButton={false}
                    mainButtonLabel='Save'
                    showSecondaryButton={false}
                    secondaryButtonLabel='Cancel'
                >
                    <DailyForm fields={dailyAddTaskFields} onSubmit={handleFormSubmit} onCancel={() => closeModal('add-note')} />
                </DailyModal>
            </div>
        </div>

    );
};

DailyNotesBar.propTypes = {

};

DailyNotesBar.defaultProps = {

};
