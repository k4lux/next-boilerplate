import styled, { css } from 'styled-components'
import { space } from 'styled-system'

export const Container = styled.div`
  font-family: ${props => props.theme.typography.fontFamily};
  position: relative;
  margin: 0 0 20px 0;
  ${space}
`

export const Label = styled.label`
  color: rgba(0, 0, 0, 0.5);
  margin: 0 0 5px 0;
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
`

export const Field = styled.input<{ error?: string }>`
  display: block;
  height: 46px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 0 15px;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  box-sizing: border-box;

  ${props =>
    props.error &&
    css`
      outline: ${props.theme.colors.alert} auto 1px;
    `}
`

export const Error = styled.p`
  margin: 5px 0 0 0;
  color: ${props => props.theme.colors.alert};
  font-size: 0.8rem;
`
