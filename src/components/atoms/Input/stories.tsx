import React from 'react'

import Input from '.'

export default {
  title: 'Atoms/Input',
  component: Input
}

export const Default = () => (
  <>
    <Input label="Name" name="name" error="This input contains an error" />
    <Input label="E-mail" name="email" error="This input contains an error" />
  </>
)
