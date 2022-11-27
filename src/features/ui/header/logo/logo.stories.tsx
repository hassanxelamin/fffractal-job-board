import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { within } from '@storybook/testing-library';
// import { expect } from '@storybook/jest';
import { LogoGrouped } from '@features/ui/header/logo';

// Metadata of our component
export default {
  title: 'Components/Logo',
  component: LogoGrouped,
} as ComponentMeta<typeof LogoGrouped>;

// Base Template
const Template: ComponentStory<typeof LogoGrouped> = (args: any) => (
  <LogoGrouped {...args} />
);

// Story, a component variation consisting of a template + args
export const Default = Template.bind({});
// Default.play = ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const button = canvas.getByRole('link');
//   expect(button).toHaveAttribute('href', '/job-post');
// };
