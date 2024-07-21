import { Meta, StoryObj } from "@storybook/react/*";
import { Button, ButtonSize, ThemeButton } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Компоненты/button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const BackgroundTheme: Story = {
  args: {
    children: "Text1",
    theme: ThemeButton.OUTLINE,
  },
};
export const BackgroundInverted: Story = {
  args: {
    children: "Text1",
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: ">",
    theme: ThemeButton.BACKGROUND,
    square: true,
  },
};
export const SquareSizeL: Story = {
  args: {
    children: ">",
    theme: ThemeButton.BACKGROUND,
    square: true,
    size: ButtonSize.L,
  },
};
export const SquareSizeM: Story = {
  args: {
    children: ">",
    theme: ThemeButton.BACKGROUND,
    square: true,
    size: ButtonSize.M,
  },
};
export const SquareSizeXL: Story = {
  args: {
    children: ">",
    theme: ThemeButton.BACKGROUND,
    square: true,
    size: ButtonSize.XL,
  },
};

export const Primary: Story = {
  args: {
    children: "Text1",
  },
};
export const Clear: Story = {
  args: {
    children: "Text1",
    theme: ThemeButton.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: "Text1",
    theme: ThemeButton.CLEAR_INVERTED,
  },
};

export const Outline: Story = {
  args: {
    children: "Text1",
    theme: ThemeButton.OUTLINE,
  },
};

//
export const OutlineSizeL: Story = {
  args: {
    children: "Text1",
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L,
  },
};
export const OutlineSizeXL: Story = {
  args: {
    children: "Text1",
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const Disabled: Story = {
  args: {
    children: ">",
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.XL,
    disabled: true,
  },
};
