import React from 'react'
import { NextPage } from 'next'
import Pagelayout from '@src/containers/pagelayout/pagelayout'

const Home: NextPage = () => {
  const { APP_NAME } = process.env

  return (
    <Pagelayout>
      Hello from <u>{APP_NAME}</u>.
    </Pagelayout>
  )
}

export default Home
