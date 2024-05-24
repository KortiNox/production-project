import { Preview } from '@storybook/react';
import { StyleDecorator } from '../src/shared/config/storybook/StyleDecorator/StyleDecorator';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#15171D',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decorators: [StyleDecorator],
  },
};

export default preview;
