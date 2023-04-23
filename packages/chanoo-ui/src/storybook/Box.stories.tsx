import type { Meta, StoryObj } from '@storybook/react';
import { as, sizeArgTypes, spaceArgTypes } from './globalArgType';
import Box from '../box/Box';

/**
 * ### 기본 레이아웃 compoenent
 */
const boxMeta: Meta<typeof Box> = {
  argTypes: {
    as,
    ...sizeArgTypes,
    ...spaceArgTypes
  },
  args: {
    as: 'div',
    css: {
      bgColor: '$black'
    },
    size: 20
  },
  component: Box,
  tags: ['autodocs'],
  title: 'Box'
};

export default boxMeta;
type Story = StoryObj<typeof Box>;

export const Primary: Story = {};
