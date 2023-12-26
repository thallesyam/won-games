import { Container } from '.'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helper'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Container><span>Won games</span></Container>)

    expect(container.firstChild).toHaveStyleRule('max-width', theme.grid.container)
    expect(container.firstChild).toMatchSnapshot()
  })
})