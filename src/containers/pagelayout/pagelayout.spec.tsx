import React from 'react'
import { render } from '@testing-library/react'
import Pagelayout from './pagelayout'

describe('Pagelayout', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Pagelayout />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('check classname', () => {
    const { getByTestId } = render(
      <Pagelayout>
        <p>Test me</p>
      </Pagelayout>,
    )

    const TEST_ID = getByTestId('pagelayout').className

    expect(TEST_ID).toBe('container')
  })
})
