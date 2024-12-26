import React from 'react';

import { DailyNotification } from '../DailyNotification/DailyNotification';

export const DailyFloatingMenu = ({ notifications, isVisible, onMarkAsRead }) => {
    if (!isVisible) return null;

    return (
        <div className="absolute top-20 right-[40rem] w-[500px] h-[1000px] p-4 bg-white border border-gray-300 rounded-2xl shadow-lg z-50">
            <div className='flex flex-col gap-4 h-full overflow-auto '>
                {notifications.map((notification, index) => (
                    <DailyNotification key={index} notification={notification} onMarkAsRead={onMarkAsRead} />
                ))}
            </div>
        </div>
    );
};
