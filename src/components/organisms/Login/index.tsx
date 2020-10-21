import React, { useState } from 'react'

import Paper from '../../atoms/Paper'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import useIsMobile from '../../../hooks/useIsMobile'
import { Brand, Welcome } from './styles'
import { EMAIL_EMPTY, PASSWORD_EMPTY } from './constants'

interface ErrorMap {
  email?: string
  password?: string
}

interface LoginProps {
  onSubmit: (data) => void
  error?: ErrorMap
}

const defaultProps = {
  error: {
    email: '',
    password: ''
  }
}

function Login({ onSubmit, error }: LoginProps) {
  const isMobile = useIsMobile()
  const [internalError, setInternalError] = useState({
    email: '',
    password: ''
  })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function getError(field) {
    if (error[field]) {
      return error[field]
    }

    return internalError[field]
  }

  function submit() {
    if (!email) {
      setInternalError({
        ...internalError,
        email: EMAIL_EMPTY
      })
      return
    }

    if (!password) {
      setInternalError({
        ...internalError,
        password: PASSWORD_EMPTY
      })
      return
    }

    onSubmit({ email, password })
  }

  return (
    <Paper
      padding={isMobile ? '30px 15px' : '40px'}
      width={isMobile ? '100%' : '460px'}
    >
      <Brand>POS Sys</Brand>
      <Welcome>Welcome to POS Sys</Welcome>
      <Input
        name="email"
        label="E-mail"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        error={getError('email')}
      />
      <Input
        name="password"
        label="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        error={getError('password')}
      />
      <Button onClick={submit} block primary>
        Login
      </Button>
    </Paper>
  )
}

Login.defaultProps = defaultProps

export default Login
