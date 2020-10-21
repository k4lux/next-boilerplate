import React from 'react'

import { Container } from './styles'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  primary?: boolean
  block?: boolean
  margin?: string
}

function Button({
  children,
  onClick,
  primary,
  block,
  margin
}: ButtonProps): JSX.Element {
  return (
    <Container
      margin={margin}
      primary={primary}
      block={block}
      onClick={onClick}
    >
      {children}
    </Container>
  )
}

export default Button
