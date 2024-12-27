"use client"
import React from 'react';

import { DailyBadge } from '../DailyBadge/DailyBadge';

export const DailyNote = ({ note }) => {

    return (
        <div className='flex flex-col border border-gray-300 p-4 rounded-2xl cursor-pointer gap-4 shadow-md'>
            <span className="text-gray-500">
                {note.date}
            </span>
            <h1 className="text-2xl">
                {note.title}
            </h1>
            <p className="text-gray-500">
                {note.description}
            </p>
            <div className="flex gap-2">
                {note.badges.map((badge, index) => (
                    <DailyBadge
                        key={index}
                        label={badge}
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

DailyNote.propTypes = {

};

DailyNote.defaultProps = {

};
