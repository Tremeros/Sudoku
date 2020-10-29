import 'styled-component'

import { theme } from '../styles'

type theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends theme {}
}
