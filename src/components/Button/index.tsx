import { MouseEvent, ReactNode } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children?: ReactNode
  size?: 'large' | 'medium' | 'small'
  fullWidth?: boolean
  icon?: ReactNode
  onClick?: () => (evnet: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...rest
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...rest}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
