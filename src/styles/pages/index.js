import styled, { keyframes } from 'styled-components'

import LogoImage from '../../assets/logo.svg'

const blink = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
`

export const Logo = styled(LogoImage)`
  fill: ${props => props.theme.colors.text};
  animation-name: ${blink};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
`
