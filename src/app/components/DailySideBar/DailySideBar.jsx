"use client"
import React, { useState } from 'react';

import Link from "next/link";
import { usePathname } from "next/navigation";

import DailyDoubleArrowRight from '@/app/assets/icons/DailyDoubleArrowRight';
import DailyDoubleArrowLeft from '@/app/assets/icons/DailyDoubleArrowLeft';

import { iconButtons } from '@/app/utils/Sidebar';

import { DailyIconButton } from '../DailyIconButton/DailyIconButton';

export const DailySideBar = ({  }) => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  const expandSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`bg-sideBarBg h-screen p-4 transition-all duration-300 ease-in-out border-r border-gray-300 shadow-md ${expanded ? 'w-60' : 'w-28'}`}>
        <div className='h-full flex flex-col items-center'>
            <div>
                LOGO
            </div>
            <DailyIconButton
              mode="transparent"
              icon={expanded ? DailyDoubleArrowLeft : DailyDoubleArrowRight}
              size="w-8 h-8"
              showLabel={expanded}
              label="Minimize"
              onClick={expandSidebar}
            />
            <div className='mt-auto mb-auto flex flex-col items-start gap-6'>
              {iconButtons.map((button, index) => (
                <Link key={index} href={button.href}>
                    <DailyIconButton
                      mode="transparent"
                      icon={button.icon}
                      hoverEffects="hover:bg-primary hover:text-light"
                      rounded="rounded-2xl"
                      size="w-8 h-8"
                      active={pathname === button.href}
                      showLabel={expanded}
                      label={button.label}
                    />
                </Link>
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


DailySideBar.propTypes = {

};

DailySideBar.defaultProps = {

};
