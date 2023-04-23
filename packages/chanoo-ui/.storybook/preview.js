import { Preview } from '@storybook/react';
import globalStyles from '../src/system/system';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story) => {
      globalStyles();
      return (
        <div>
          <Story />
        </div>
      );
    }
  ]
};

export default preview;
