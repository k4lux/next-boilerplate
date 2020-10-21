import styled from 'styled-components'
import { space, layout } from 'styled-system'

export default styled.div<{ padding?: string; width?: string }>`
  ${space}
  ${layout}
  background: white;
  border-radius: 4px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
`
