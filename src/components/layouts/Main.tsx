// @ts-nocheck
import Head from 'next/head'
import { useEffect } from 'react'
import { Box, Container, useColorMode } from '@chakra-ui/react'
import Voxel from '../Voxel'
import NoSsr from '../NoSsr'
import Navbar from '../Navbar'

const Main = ({ children, router }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    console.log(colorMode)
    if (colorMode === "light") {
      toggleColorMode();
    }
  }, []);

  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Leo Rodriguez - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW='container.md' pt={14}>
        <NoSsr>
          <Voxel />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Main