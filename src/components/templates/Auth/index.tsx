import React from 'react'

import { Container } from './styles'

interface AuthLayoutProps {
  children: React.ReactNode
}

function AuthLayout({ children }: AuthLayoutProps) {
  return <Container>{children}</Container>
}

export default AuthLayout
