import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryDark: string
      primaryPale: string
      secondary: string
      secondaryDark: string
      secondaryPale: string
      charcoal: string
      charcoalPale: string
      grayDark: string
      grayMedium: string
      grayLight: string
    }
    typography: {
      fontFamily: {
        sans: string[]
        condensed: string[]
        playfair: string[]
        cormorant: string[]
      }
    }
    breakpoints: string[],
    mediaQueries: {
      extraSmall: string,
      small: string,
      medium: string,
      large: string
    }
  }
}
