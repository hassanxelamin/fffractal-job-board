// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

/*
 * Storybook
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/*
 * Components
 */
import { Dropdown } from './dropdown';

// Metadata of our component
export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

// Base Template
const Template: ComponentStory<typeof Dropdown> = (args: any) => (
  <Dropdown {...args} />
);

// Story, a component variation consisting of a template + args
export const Default = Template.bind({});
