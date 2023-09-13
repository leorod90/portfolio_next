import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Main from '../components/layouts/Main'
import theme from '@/libs/theme'
import Fonts from '@/components/Fonts'
import { AnimatePresence } from 'framer-motion'
import PreLoader, { PreLoaderStyle } from '@/components/PreLoader/PreLoader'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Main router={router}>
        <AnimatePresence mode="wait" initial={true}>
          <PreLoaderStyle />
          <PreLoader />
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  )
}
