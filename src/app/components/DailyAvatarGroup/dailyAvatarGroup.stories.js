import { fn } from '@storybook/test';

import { DailyAvatarGroup } from './DailyAvatarGroup';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'daily/DailyAvatarGroup',
  component: DailyAvatarGroup,
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
export const SimpleDark = {
  args: {
    avatars: [
        { src: 'https://docs.material-tailwind.com/img/face-2.jpg', alt: 'User 1', size: 'w-12 h-12' },
        { src: 'https://docs.material-tailwind.com/img/face-2.jpg', alt: 'User 2', size: 'w-12 h-12' },
        { src: 'https://docs.material-tailwind.com/img/face-2.jpg', alt: 'User 3', size: 'w-12 h-12' },
        { src: 'https://docs.material-tailwind.com/img/face-2.jpg', alt: 'User 4', size: 'w-12 h-12' },
        { src: 'https://docs.material-tailwind.com/img/face-2.jpg', alt: 'User 4', size: 'w-12 h-12' },
        { src: 'https://docs.material-tailwind.com/img/face-2.jpg', alt: 'User 4', size: 'w-12 h-12' },
        { src: 'https://docs.material-tailwind.com/img/face-2.jpg', alt: 'User 4', size: 'w-12 h-12' },
        { src: 'https://docs.material-tailwind.com/img/face-2.jpg', alt: 'User 4', size: 'w-12 h-12' },
        { src: 'https://docs.material-tailwind.com/img/face-2.jpg', alt: 'User 4', size: 'w-12 h-12' },
        { src: 'https://docs.material-tailwind.com/img/face-2.jpg', alt: 'User 4', size: 'w-12 h-12' },
        { src: 'https://docs.material-tailwind.com/img/face-2.jpg', alt: 'User 4', size: 'w-12 h-12' },
        { src: 'https://docs.material-tailwind.com/img/face-2.jpg', alt: 'User 4', size: 'w-12 h-12' },
      ]
  },
};