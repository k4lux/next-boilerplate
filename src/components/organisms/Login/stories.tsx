import React from 'react'
import { action } from '@storybook/addon-actions'

import Login from '.'

export default {
  title: 'Organisms/Login',
  component: Login
}

export const Default = () => <Login onSubmit={action('onSubmit')} />
