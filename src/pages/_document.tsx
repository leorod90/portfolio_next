import { ColorModeScript, theme } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import PreLoader, { PreLoaderStyle } from '@/components/PreLoader/PreLoader'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <PreLoaderStyle />
        <PreLoader /> */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
