import React from 'react'
import { render } from '@testing-library/react'

import Header from './header'

describe('Header Component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Header />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders header page', () => {
    const { getByTestId } = render(<Header />)

    const HEADER = getByTestId('header').textContent

    expect(HEADER).toBe('Header Page')
  })
})
