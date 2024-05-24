import { Meta, StoryObj } from '@storybook/react/*';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Компоненты/button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text1',
  },
};
export const Clear: Story = {
  args: {
    children: 'Text1',
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'Text1',
    theme: ThemeButton.OUTLINE,
  },
};
