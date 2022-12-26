// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

/*
 * Storybook
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/*
 * React Test Library
 */
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

/*
 * Components
 */
import { ButtonGradient } from './button';

// Metadata of our component
export default {
  title: 'Components/Buttons',
  component: ButtonGradient,
  args: { text: 'Post a Job!' },
  argTypes: {
    onClick: { action: true },
  },
} as ComponentMeta<typeof ButtonGradient>;

// Base Template
const Template: ComponentStory<typeof ButtonGradient> = (args) => (
  <ButtonGradient {...args} />
);

// Story, a component variation consisting of a template + args
export const Default = Template.bind({});
Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('link');
  expect(button).toHaveAttribute('href', '/job-post');
};
