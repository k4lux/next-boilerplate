import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'

export function renderWithTheme(component) {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}
