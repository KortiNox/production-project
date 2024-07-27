import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Input } from "shared/ui/Input/Input";

// Новый синтаксис для Meta, используя default export
export default {
  title: "shared/Input",
  component: Input,
  // Управление аргументами теперь более простое и чистое
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Новый синтаксис для Story, используя named export
const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
// Прямое присваивание аргументов без необходимости использования bind
Primary.args = {
  placeholder: "Type text",
  value: "123123",
};
