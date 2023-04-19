import type { Meta, StoryObj } from '@storybook/react';
import Text from '../text/Text';
import { fontStyle } from '../theme';
import { as } from './globalArgType';

/**
 * ### 문자를 나타내는 compoenent
 * fontType에 맞춰 알맞은 스타일의  텍스트를 사용하는 Text component
 */
const meta: Meta<typeof Text> = {
  argTypes: {
    as,
    fontType: {
      control: { type: 'select' },
      defaultValue: 'text',
      description: 'fontType을 지정해 fontSize, fontWeight, element를 변경',
      options: Object.keys(fontStyle),
      table: {
        defaultValue: { summary: 'text' },
        type: { detail: Object.keys(fontStyle).join(', '), summary: 'string' }
      }
    }
  },
  args: {
    as: 'p',
    children: '이것은 Text 입니다.',
    fontType: 'text'
  },
  component: Text,
  tags: ['autodocs'],
  title: 'Text'
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {};
