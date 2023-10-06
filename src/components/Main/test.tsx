import { render, screen } from '@testing-library/react'
import { Main } from '.'
import { renderWithTheme } from '@/utils/tests/helper'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Main />)
    expect(screen.getByRole('heading', { name: /react/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<Main />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
