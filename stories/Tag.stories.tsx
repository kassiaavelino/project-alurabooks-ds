import React from "react";
import { Tag, TagProps } from '../src/components/Tag';
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Components/Tag',
    component: Tag
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args}/>

export const Primario = Template.bind({})

Primario.args = {
    text: 'Tag'
} as TagProps