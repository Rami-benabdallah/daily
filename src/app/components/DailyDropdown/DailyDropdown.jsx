"use client"
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { DailyIconButton } from '../DailyIconButton/DailyIconButton';
import { DailyModal } from '../DailyModal/DailyModal';

import { useModal } from '@/app/hooks/useModal';

import DailyDots from '@/app/assets/icons/DailyDots';

export const DailyDropdown = ({ padding, size, mode, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    if (!isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
      document.removeEventListener('mousedown', handleClickOutside);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <DailyIconButton
        mode={mode}
        customPadding={padding}
        icon={DailyDots}
        size={size}
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="absolute w-48 right-0 mt-2 bg-white shadow-lg rounded-md border z-10">
          <ul className="py-2">
            {menuItems.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ item }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <li
      className="relative group px-4 py-2 hover:bg-gray-100 cursor-pointer"
      onMouseEnter={() => item.subMenu && setIsSubMenuOpen(true)}
      onMouseLeave={() => item.subMenu && setIsSubMenuOpen(false)}
      onClick={() => {
        if (item.action === "edit-task") {
          openModal(item.action);
        } else if (item.action === "delete-task") {
          openModal(item.action);
        }
      }}
    >
      <div className="flex justify-between items-center">
        <span>{item.label}</span>
        {item.subMenu && (
          <span className="ml-2">▶</span>
        )}
      </div>
      {isSubMenuOpen && item.subMenu && (
        <ul className="absolute left-full top-0 mt-0 ml-2 w-48 bg-white shadow-lg rounded-md border z-10">
          {item.subMenu.map((subItem, subIndex) => (
            <MenuItem key={subIndex} item={subItem} />
          ))}
        </ul>
      )}

      <DailyModal
        name="edit-task"
        title="Edit Task"
        isOpen={isModalOpen('edit-task')} 
        closeModal={() => closeModal('edit-task')} 
        mainButtonLabel='Save'
        showSecondaryButton={true} 
        secondaryButtonLabel='Cancel'
      >
        <h2 className="text-lg font-bold">Edit Item</h2>
        <p>Here is your modal content...</p>
      </DailyModal>
      <DailyModal
        name="delete-task"
        title="Delete Task"
        isOpen={isModalOpen('delete-task')} 
        closeModal={() => closeModal('delete-task')} 
        showMainButton={true} 
        mainButtonLabel='Save'
        showSecondaryButton={true} 
        secondaryButtonLabel='Cancel'
      >
        <p>Are you sure you want to delete this task?</p>
      </DailyModal>
    </li>
  );
};

DailyDropdown.propTypes = {
  mode: PropTypes.string,
  padding: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  menuItems: PropTypes.array,
};

DailyDropdown.defaultProps = {
  mode: 'transparent',
  padding: '',
  size: '',
  icon: '',
  menuItems: [],
};
