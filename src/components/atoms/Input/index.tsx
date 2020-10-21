import React from 'react'

import { Container, Label, Field, Error } from './styles'

interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  label: string
  error?: string
  name: string
  type?: string
}

const defaultProps = {
  type: 'text'
}

function Input({ name, label, error, onChange, value, type }: InputProps) {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Field
        id={name}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        error={error}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
}

Input.defaultProps = defaultProps

export default Input
