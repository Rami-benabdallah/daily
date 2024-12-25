import React, { useState } from 'react';
import { fn } from '@storybook/test';
import { DailyInputCheckbox } from './DailyInputCheckbox';

export default {
  title: 'Daily/DailyInputCheckbox',
  component: DailyInputCheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

// Wrapper component to manage state in Storybook
const CheckboxWrapper = ({ checked: initialChecked, onChange, ...args }) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    if (onChange) onChange(e); // Trigger Storybook's action
  };

  return (
    <DailyInputCheckbox
      {...args}
      checked={checked}
      onChange={handleChange}
    />
  );
};

export const Simple = {
  render: (args) => <CheckboxWrapper {...args} />,
  args: {
    id: 'checkbox-1',
    label: 'Accept Terms and Conditions',
    name: 'terms',
    checked: false,
  },
};
