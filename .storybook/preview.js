import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../src/styles/theme'
import GlobalStyle from '../src/styles/global'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
]
