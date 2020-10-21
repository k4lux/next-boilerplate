import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from '.'

export default {
  title: 'Atoms/Button',
  component: Button
}

export const Default = (): JSX.Element => (
  <Button onClick={action('onClick')}>Default</Button>
)

export const Primary = (): JSX.Element => (
  <Button primary onClick={action('onClick')}>
    Default
  </Button>
)

export const Block = (): JSX.Element => (
  <Button primary block onClick={action('onClick')}>
    Default
  </Button>
)
