import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = ButtonTypes & {
  size?: 'large' | 'medium' | 'small'
  fullWidth?: boolean
  minimal?: boolean
  icon?: ReactNode
  as?: React.ElementType
}

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  minimal = false,
  icon,
  ...rest
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} minimal={!!minimal} {...rest}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
