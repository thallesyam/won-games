import { StoryFn, Meta } from '@storybook/react'
import { AddShoppingCart } from 'styled-icons/material-outlined'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: undefined
    }
  }
} as Meta

export const Default: StoryFn<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Buy now'
}

export const WithIcon: StoryFn<ButtonProps> = (args) => <Button {...args} />

WithIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}

export const AsLink: StoryFn<ButtonProps> = (args) => <Button {...args} />

AsLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
}
