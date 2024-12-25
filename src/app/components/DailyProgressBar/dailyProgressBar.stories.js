import React from 'react';
import { DailyProgressBar } from './DailyProgressBar';

export default {
  title: 'Daily/DailyProgressBar',
  component: DailyProgressBar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    initialPercentage: { control: 'number' },
    onChange: { action: 'changed' },
  },
};

export const Interactive = {
  args: {
    initialPercentage: 30,
    onChange: (percentage) => console.log(`New percentage: ${percentage}`),
  },
};
