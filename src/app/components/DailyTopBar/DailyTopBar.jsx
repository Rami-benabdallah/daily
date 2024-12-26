"use client"
import React, { useState, useEffect, useRef } from 'react';

import { DailyAvatar } from '../DailyAvatar/DailyAvatar';
import { DailyIconButton } from '../DailyIconButton/DailyIconButton';
import { DailyFloatingMenu } from '../DailyFloatingMenu/DailyFloatingMenu';

import DailyNotification from '@/app/assets/icons/DailyNotification';

import { notificationMock } from '@/app/utils/MockData';

export const DailyTopBar = ({ }) => {
  const [notifications, setNotifications] = useState(notificationMock);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const floatingMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: !notification.read } : notification
      )
    );
  };

  const userInfo = {
    firstName: 'Rami',
    lastName: 'Ben Hadj Abdallah',
    email: 'ramibenabdallah@gmail.com',
    picture: 'https://docs.material-tailwind.com/img/face-2.jpg',
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (floatingMenuRef.current && !floatingMenuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='bg-sideBarBg w-full h-16 p-4 px-12'>
      <div className='flex items-center justify-between h-full w-full'>
        <div className='flex gap-4 items-center'>
          <DailyAvatar
            src={userInfo.picture}
            alt="profile picture"
            size="h-12 w-12"
          />
          <span className='text-lg'>
            Hello {userInfo.firstName}
          </span>
        </div>
        <div className='flex gap-4 items-center' ref={floatingMenuRef}>
          <DailyIconButton
            mode="transparent"
            customPadding="p-0"
            icon={DailyNotification}
            size="w-10 h-10"
            onClick={toggleMenu}
          />
          <DailyFloatingMenu
            isVisible={isMenuVisible}
            notifications={notifications}
            onMarkAsRead={markAsRead}
          />
        </div>
      </div>
    </div>
  );
};

DailyTopBar.propTypes = {

};

DailyTopBar.defaultProps = {

};
