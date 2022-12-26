// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

/*
 * Storybook
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/*
 * Components
 */
import { AuthModal } from './auth-modal';

// Metadata of our component
export default {
  title: 'Components/AuthModal',
  component: AuthModal,
  args: { text: 'Post a Job!' },
  argTypes: {
    onClick: { action: true },
  },
} as ComponentMeta<typeof AuthModal>;

// Base Template
const Template: ComponentStory<typeof AuthModal> = (args: any) => (
  <AuthModal {...args} />
);

// Story, a component variation consisting of a template + args
export const Default = Template.bind({});
