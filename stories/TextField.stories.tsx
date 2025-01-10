import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextField, TextFieldProps } from '../src/components/TextField'

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    label: {
        control: 'text'
    }
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const TextFieldComponent = Template.bind({})
TextFieldComponent.args = {
    label: 'Uma label interessante',
} as TextFieldProps