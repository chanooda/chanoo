import type { Meta, StoryObj } from '@storybook/react';
import { as, flexArgTypes, sizeArgTypes, spaceArgTypes } from './globalArgType';
import Box from '../box/Box';
import Col from '../col/Col';

/**
 * ### flex column 레이아웃 compoenent
 */
const meta: Meta<typeof Col> = {
  argTypes: {
    as,
    ...flexArgTypes,
    flexC: {
      type: 'boolean'
    },
    ...sizeArgTypes,
    ...spaceArgTypes
  },
  args: {
    as: 'div',
    css: {
      bgColor: '$black',
      color: 'white',
      gap: '$2',
      p: '$2'
    }
  },
  component: Col,
  tags: ['autodocs'],
  title: 'Col'
};

export default meta;
type Story = StoryObj<typeof Col>;

export const Primary: Story = {
  render: (args) => (
    <Col {...args}>
      <Box css={{ bgColor: '$white', size: '$14' }} />
      <Box css={{ bgColor: '$white', size: '$14' }} />
      <Box css={{ bgColor: '$white', size: '$14' }} />
    </Col>
  )
};
