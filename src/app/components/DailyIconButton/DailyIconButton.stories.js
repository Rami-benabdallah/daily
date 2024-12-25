import { fn } from '@storybook/test';

import { DailyIconButton } from './DailyIconButton';
import TeemoArrow from '@/app/assets/icons/TeemoArrow';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Daily/DailyIconButton',
  component: DailyIconButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Dark = {
  args: {
    mode: 'dark',
    icon: TeemoArrow,
  },
};

export const Light = {
    args: {
      mode: 'light',
      icon: TeemoArrow,
    },
};

export const Disabled = {
    args: {
      mode: 'light',
      icon: TeemoArrow,
      disabled: true,
      size: 'h-8 w-8'
    },
};

export const NotRounded = {
    args: {
      mode: 'light',
      icon: TeemoArrow,
      rounded: 'rounded-none'
    },
};

export const Transparent = {
  args: {
      mode: 'transparent',
      icon: TeemoArrow,
  },
};

export const TransparentWithHover = {
    args: {
        mode: 'transparent',
        icon: TeemoArrow,
        hoverEffects: 'hover:bg-primary hover:text-light',
        rounded: 'rounded-2xl'
    },
};
