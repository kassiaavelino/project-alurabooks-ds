import React from 'react';
import {  ComponentMeta, ComponentStory } from '@storybook/react'
import { OptionsGroup, OptionsGroupProps } from '../src/components/OptionsGroup'

export default {
  title: 'Components/OptionsGroup',
  component: OptionsGroup
} as ComponentMeta<typeof OptionsGroup>

const Template: ComponentStory<typeof OptionsGroup> = (args) => <OptionsGroup {...args} />

export const Default = Template.bind({})

Default.args = {
  options: [
    {
      id: 1,
      title: "E-book",
      body: "R$ 00,00",
      footer: ".pdf, .epub, .mob"
    },
    {
      id: 2,
      title: "Impresso",
      body: "R$ 00,00",
      footer: ".pdf, .epub, .mob"
    },
    {
      id: 3,
      title: "Impresso + E-book",
      body: "R$ 00,00",
      footer: ".pdf, .epub, .mob"
    },
  ]
} as OptionsGroupProps