import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Container, Flex, Heading, Image as ChakraImage, useColorModeValue, Button } from '@chakra-ui/react'
import Section from '@/components/Section'
import Paragraph from '@/components/Paragraph'
import { DownloadIcon } from '@chakra-ui/icons'
import Article from '@/components/layouts/Article'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Article>
      <Container>
        <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} alignItems='center'>
          Nice to meet you! I'm a Web and Mobile Front End Developer
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-titles'>
              Leo Rodriguez
            </Heading>
            <p>React / React Native / Next / UI & UX</p>
          </Box>
          <Flex
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            justifyContent='center'
          >
            <Box
            // borderColor='whiteAlpha.800'
            // borderWidth={2}
            // height={80}
            // width={80}
            // borderStyle='solid'
            // // maxWidth='100px'
            // display='inline-block'
            // borderRadius='full'
            // overflow='hidden'
            >
              <ChakraImage
                width={150}
                height={150}
                borderColor='whiteAlpha.800'
                borderWidth={4}
                borderStyle='solid'
                // maxWidth='100px'
                display='inline-block'
                borderRadius='full'
                overflow='hidden'
                src='/photos/me.jpg'
                alt='me'
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Flex>
        </Box>
        <Section delay={.1}>
          <Heading as='h3' variant='section-title'>About Me</Heading>
          <Paragraph>I am a self taught developer with over 2 years of industry experience.
            I love building, designing and creating things. While I primarily focus on the front end,
            I do enjoy all aspects of code. Im lucky that my hobby for developing is now my job and I couldn't
            be happier.</Paragraph>
          <Flex alignItems='center' my='4'>
            <Button bg='glassTeal' color='black' rightIcon={<DownloadIcon />}>Resume</Button>
          </Flex>
        </Section>
      </Container>
    </Article>
  )
}
