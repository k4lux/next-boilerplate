import React from 'react'

import Paper from '.'

export default {
  title: 'Atoms/Paper',
  component: Paper,
  parameters: {
    backgrounds: {
      default: 'background',
      values: [{ name: 'background', value: '#EEEEEE' }]
    }
  }
}

export const Default = () => <Paper padding="40px">Box</Paper>
