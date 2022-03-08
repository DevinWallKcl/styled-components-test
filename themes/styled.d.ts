
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string
      primaryPale: string
      secondary: string
      secondaryDark: string
      secondaryPale: string
    };
  }
}