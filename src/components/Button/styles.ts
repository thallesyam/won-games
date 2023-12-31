import styled, { DefaultTheme, css } from 'styled-components'
import { ButtonProps } from '.'
import { darken } from 'polished'

type WrapperProps = Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'> & {
  hasIcon: boolean
}

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  icon: (theme: DefaultTheme) => css`
    gap: ${theme.spacings.xxsmall};

    svg {
      width: 1.5rem;
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      color: ${darken(0.1, theme.colors.primary)}
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;
    text-decoration: none;

    &:hover {
      background: ${minimal ? 'none' : 'linear-gradient(180deg, #e35565 0%, #d958a6 50%)' };
    }

    &:disabled {
      cursor: not-allowed;
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!hasIcon && wrapperModifiers.icon(theme)}
    ${!!minimal && wrapperModifiers.minimal(theme)}
  `}
`
