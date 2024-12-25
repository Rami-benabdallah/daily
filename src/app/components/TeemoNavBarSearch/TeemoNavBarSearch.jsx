import React from 'react';
import Image from 'next/image';

import PropTypes from 'prop-types';

import { TeemoButton } from '../DailyButton/DailyButton';
import { TeemoIconButton } from '../DailyIconButton/DailyIconButton';
import { TeemoNavBarItem } from '../TeemoNavBarItem/TeemoNavBarItem';

import TeemoCart from '@/app/assets/icons/TeemoCard';
import TeemoSearch from '@/app/assets/icons/TeemoSearch';
import teemoLogo2 from '@/app/assets/images/teemoLogo2.png';

export const TeemoNavBarSearch = ({ placeholder }) => {

  return (
    <div className='flex items-center w-screen justify-between h-16 bg-purple overflow-hidden'>
        <div className='flex items-center justify-center'>
            <Image 
                src={teemoLogo2}
                height={60}
                width={180}
            />
        </div>
        <div class="w-full max-w-sm min-w-[800px]">
            <div class="relative">
                <input
                    class="w-full h-12 bg-light placeholder_text-slate-400 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus_border-slate-400 hover_border-slate-300 shadow-sm focus_shadow"
                    placeholder={placeholder} 
                />
                <div className='absolute top-1 right-1 '>
                    <TeemoButton 
                        mode='dark'
                        label='Search'
                        icon={TeemoSearch}
                        hasLeftIcon={true}
                        size='w-4 h-4'
                        padding='py-2 px-4'
                    />
                </div>
            </div>
        </div>
        <div className='flex items-center gap-6 text-light mr-8'>
            <TeemoNavBarItem 
                label='Account'
            />
            <TeemoNavBarItem 
                label='Favorites'
            />
            <TeemoIconButton 
                mode='transparent'
                icon={TeemoCart}
                size='h-8 w-8'
            />
        </div>
    </div>
  );
};

TeemoNavBarSearch.propTypes = {
    placeholder: PropTypes.string,
};

TeemoNavBarSearch.defaultProps = {
    placeholder: '',
};
