import React, { FC } from 'react'
import { Footer, Header } from '@src/components'
import { PagelayoutProps } from '@src/types'

const Pagelayout: FC<PagelayoutProps> = ({ children }) => {
  return (
    <div data-testid="pagelayout" className="container mx-auto flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Pagelayout
