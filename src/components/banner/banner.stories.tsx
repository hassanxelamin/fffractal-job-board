import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Banner } from './banner';

export default {
  title: 'Components/Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = () => <Banner />;

export const Default = Template.bind({});
