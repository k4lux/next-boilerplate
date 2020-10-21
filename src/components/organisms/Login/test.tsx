import React from 'react'
import { cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '../../../utils/test-utils'

import Login from '.'
import { EMAIL_EMPTY, PASSWORD_EMPTY } from './constants'

afterEach(cleanup)

describe('Login', () => {
  test('should get error when email is empty', async () => {
    renderWithTheme(<Login onSubmit={data => data} />)

    await userEvent.click(screen.getByRole('button'))

    expect(await screen.findByText(EMAIL_EMPTY)).toBeInTheDocument()
  })

  test('should get error when email is empty', async () => {
    renderWithTheme(<Login onSubmit={data => data} />)

    await userEvent.type(
      screen.getByLabelText('E-mail'),
      'kaluanbentes@gmail.com'
    )

    await userEvent.click(screen.getByRole('button'))

    expect(await screen.findByText(PASSWORD_EMPTY)).toBeInTheDocument()
  })

  test('should return correct data when submit', async () => {
    const onSubmit = jest.fn()
    const data = {
      email: 'kaluanbentes@gmail.com',
      password: '1234'
    }

    renderWithTheme(<Login onSubmit={onSubmit} />)

    await userEvent.type(screen.getByLabelText('E-mail'), data.email)
    await userEvent.type(screen.getByLabelText('Password'), data.password)

    await userEvent.click(screen.getByRole('button'))

    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalledWith(data)
  })
})
