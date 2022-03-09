import { DefaultTheme } from 'styled-components'

const breakpoints = ['321px', '760px', '1198px', '1622px']

const defaultTheme: DefaultTheme = {
  colors: {
    primary: '#fff000',
    primaryDark: '#EEE000',
    primaryPale: '#FFF00080',
    secondary: '#567076',
    secondaryDark: '#485D62',
    secondaryPale: '#56707680',
    charcoal: '#3B3B3B',
    charcoalPale: '#3B3B3B80',
    grayDark: '#898989',
    grayMedium: '#CCCCCC',
    grayLight: '#EEEEEE',
  },
  typography: {
    fontFamily: {
      sans: ['Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      condensed: [
        'Open Sans Condensed',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
      playfair: ['Playfair Display', 'serif'],
      cormorant: ['Cormorant', 'serif'],
    },
  },
  breakpoints: breakpoints,
  mediaQueries: {
    extraSmall: `@media screen and (min-width: ${breakpoints[0]})`,
    small: `@media screen and (min-width: ${breakpoints[1]})`,
    medium: `@media screen and (min-width: ${breakpoints[2]})`,
    large: `@media screen and (min-width: ${breakpoints[3]})`,
  },
}

export default defaultTheme
