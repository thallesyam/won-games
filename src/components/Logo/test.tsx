import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helper'
import 'jest-styled-components'
import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Logo Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Logo Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a default logo', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Logo Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a big logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Logo Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '11rem'
    )
  })
})
