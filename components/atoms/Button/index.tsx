import styled from 'styled-components'
import { mapProp, ifProp } from '../../../lib/styledUtilities'

type Values<T> = T[keyof T]

type ButtonProps = {
  variant?: Values<typeof StyleVariants>
  size?: Values<typeof SizeVariants>
  fullWidth?: boolean
}

export const StyleVariants = {
  Primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
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
      [StyleVariants.secondary]: 'white',
      default: theme.colors.secondary,
    }))
  )};

  border: 1px solid ${mapProp('variant', ({ theme }) => ({
    [StyleVariants.Primary]: theme.colors.primary,
    default: theme.colors.secondary,
  }))};

  background: ${mapProp('variant', ({ theme }) => ({
    [StyleVariants.secondary]: theme.colors.secondary,
    [StyleVariants.tertiary]: 'inherit',
    default: theme.colors.primary,
  }))};

  &:hover {
    background: ${mapProp('variant', ({ theme }) => ({
      [StyleVariants.secondary]: theme.colors.secondaryDark,
      [StyleVariants.tertiary]: 'inherit',
      default: theme.colors.primaryDark,
    }))};
  }

  &:disabled {
    background: ${mapProp('variant', ({ theme }) => ({
      [StyleVariants.secondary]: theme.colors.secondaryPale,
      [StyleVariants.tertiary]: 'inherit',
      default: theme.colors.primaryPale,
    }))};

    border: 1px solid
      ${mapProp('variant', ({ theme }) => ({
        [StyleVariants.Primary]: theme.colors.primaryPale,
        default: theme.colors.secondaryPale,
      }))};
  }

  line-height: 16px;

  font-size: ${mapProp('size', {
    [SizeVariants.Medium]: '16px',
    [StyleVariants.tertiary]: '14px',
    default: '20px',
  })};

  height: ${mapProp('size', {
    [SizeVariants.Medium]: '40px',
    [StyleVariants.tertiary]: '26px',
    default: '48px',
  })};

  padding ${mapProp('size', {
    [SizeVariants.Medium]: '12px 24px',
    [StyleVariants.tertiary]: '5px 16px',
    default: '16px 24px',
  })};
`
Button.defaultProps = {
  variant: StyleVariants.Primary,
  size: SizeVariants.Large,
  fullWidth: false,
}

export default Button
