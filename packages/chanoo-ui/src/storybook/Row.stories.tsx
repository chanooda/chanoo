import type { Meta, StoryObj } from '@storybook/react';
import { as, flexArgTypes, sizeArgTypes, spaceArgTypes } from './globalArgType';
import Row from '../row/Row';
import Box from '../box/Box';

/**
 * ### flex row 레이아웃 compoenent
 */
const meta: Meta<typeof Row> = {
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
  component: Row,
  tags: ['autodocs'],
  title: 'Row'
};

export default meta;
type Story = StoryObj<typeof Row>;

export const Primary: Story = {
  render: (args) => (
    <Row {...args}>
      <Box css={{ bgColor: '$white', size: '$14' }} />
      <Box css={{ bgColor: '$white', size: '$14' }} />
      <Box css={{ bgColor: '$white', size: '$14' }} />
    </Row>
  )
};
