/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import '@src/styles/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
