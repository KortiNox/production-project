import { Meta, StoryObj } from "@storybook/react/*";
import { Text, TextTheme } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Компоненты/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: "Title random",
    text: "Text random",
  },
};

export const onlyTitle: Story = {
  args: {
    title: "Title random",
  },
};

export const onlyText: Story = {
  args: {
    text: "Text random",
  },
};

export const Error: Story = {
  args: {
    title: "Title random error",
    text: "Text error",
    theme: TextTheme.ERROR,
  },
};
