import React from 'react';

import DailyCheckfilled from '@/app/assets/icons/DailyCheckfilled';
import DailyError from '@/app/assets/icons/DailyError';
import DailyInformation from '@/app/assets/icons/DailyInformation';
import DailyEye from '@/app/assets/icons/DailyEye';
import DailyEyeClosed from '@/app/assets/icons/DailyEyeClosed';

export const DailyNotification = ({ notification, onMarkAsRead }) => {
    const bgColor = notification.read ? 'bg-light' : modeToBgColor[notification.type];
    const textColor = notification.read ? 'text-gray-900' : modeToTextColor[notification.type];
    const borderColor = notification.read ? 'text-gray-900' : modeToBorderColor[notification.type];
    const IconComponent = typeToIcon[notification.type] || DailyInformation;

    const handleMarkAsRead = () => {
        if (onMarkAsRead) {
            onMarkAsRead(notification.id);
        }
    };

    return (
        <div className={`flex flex-col p-4 rounded-2xl gap-4 shadow-md border ${bgColor} ${textColor} ${borderColor}`}>
            <div className='flex'>
                <IconComponent className={`w-12 h-12 ${textColor}`} />
                <span className='ml-4'>
                    {notification.text}
                </span>
                {!notification.read ? (
                    <DailyEye className={`w-8 h-8 cursor-pointer ${textColor}`} onClick={handleMarkAsRead} />
                ) : (
                    <DailyEyeClosed className={`w-8 h-8 cursor-pointer ${textColor}`} onClick={handleMarkAsRead} />
                )}
            </div>
            <div className='flex w-full justify-end'>
                <span className='text-sm'>
                    4 Hours ago.
                </span>
            </div>
        </div>
    );
};


const modeToBgColor = {
    success: 'bg-success',
    error: 'bg-error',
    attention: 'bg-attention',
    information: 'bg-information',
};

const modeToTextColor = {
    success: 'text-successText',
    error: 'text-errorText',
    attention: 'text-attentionText',
    information: 'text-informationText',
};

const modeToBorderColor = {
    success: 'border-successText',
    error: 'border-errorText',
    attention: 'border-attentionText',
    information: 'border-informationText',
};

const typeToIcon = {
    error: DailyError,
    attention: DailyError,
    success: DailyCheckfilled,
    information: DailyInformation,
};