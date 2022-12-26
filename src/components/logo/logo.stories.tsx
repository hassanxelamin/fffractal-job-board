import React from 'react';

/*
 * Storybook
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/*
 * Components
 */
import { LogoGrouped } from '@features/ui/header/logo';

// Metadata of our component
export default {
  title: 'Components/Logo',
  component: LogoGrouped,
} as ComponentMeta<typeof LogoGrouped>;

// Base Template
const Template: ComponentStory<typeof LogoGrouped> = () => <LogoGrouped />;

// Story, a component variation consisting of a template + args
export const Default = Template.bind({});
