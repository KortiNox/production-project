import { Preview } from "@storybook/react";
import { StyleDecorator } from "../src/shared/config/storybook/StyleDecorator/StyleDecorator";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#f0f0f0",
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
