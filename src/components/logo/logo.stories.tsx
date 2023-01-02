import React from 'react';

/*
 * Storybook
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/*
 * Components
 */
import { Logo } from './logo';

// Metadata of our component
export default {
  title: 'Components/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

// Base Template
const Template: ComponentStory<typeof Logo> = () => <Logo />;

// Story, a component variation consisting of a template + args
export const Default = Template.bind({});
