import styled from 'styled-components'
import { mapProp, ifProp, themeColor, prop } from '../../../lib/styledUtilities'

type Values<T> = T[keyof T]

type ButtonProps = {
  variant?: Values<typeof StyleVariants>
  size?: Values<typeof SizeVariants>
  fullWidth?: boolean
}

export const StyleVariants = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
} as const

export const SizeVariants = {
  Large: 'large',
  Medium: 'medium',
  Small: 'small',
} as const

const Button = styled.button<ButtonProps>`
  font-style: normal;
  font-weight: normal;
  border-radius: 3px;

  ${ifProp('fullWidth', 'width: 100%')};

  color: ${ifProp(
    ({ variant }) => variant != StyleVariants.Primary,
    mapProp('variant', ({ theme }) => ({
      [StyleVariants.Secondary]: 'white',
      default: theme.colors.secondary,
    }))
  )};

  border: 1px solid ${mapProp('variant', {
    [StyleVariants.Primary]: themeColor('primary'),
    default: themeColor('secondary'),
  })};

  background: ${mapProp('variant', {
    [StyleVariants.Secondary]: themeColor('secondary'),
    [StyleVariants.Tertiary]: 'inherit',
    default: themeColor('primary'),
  })};

  &:hover {
    background: ${mapProp('variant', {
      [StyleVariants.Secondary]: themeColor('secondaryDark'),
      [StyleVariants.Tertiary]: themeColor('grayLight'),
      default: themeColor('primaryDark'),
    })};
  }

  &:disabled {
    background: ${mapProp('variant', {
      [StyleVariants.Secondary]: themeColor('secondaryPale'),
      [StyleVariants.Tertiary]: 'inherit',
      default: themeColor('primaryPale'),
    })};

    border: 1px solid
      ${mapProp('variant', {
        [StyleVariants.Primary]: themeColor('primaryPale'),
        [StyleVariants.Tertiary]: themeColor('charcoalPale'),
        default: themeColor('secondaryPale'),
      })};
  }

  line-height: 16px;

  font-size: ${mapProp('size', {
    [SizeVariants.Medium]: '16px',
    [StyleVariants.Tertiary]: '14px',
    default: '20px',
  })};

  height: ${mapProp('size', {
    [SizeVariants.Medium]: '40px',
    [StyleVariants.Tertiary]: '26px',
    default: '48px',
  })};

  padding ${mapProp('size', {
    [SizeVariants.Medium]: '12px 24px',
    [StyleVariants.Tertiary]: '5px 16px',
    default: '16px 24px',
  })};
`
Button.defaultProps = {
  variant: StyleVariants.Primary,
  size: SizeVariants.Large,
  fullWidth: false,
}

export default Button
