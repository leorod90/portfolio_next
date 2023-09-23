import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {
  Box,
  Container,
  Flex, Heading,
  Image as ChakraImage,
  useColorModeValue,
  Button,
  ListItem,
  Link,
  Icon,
  List
} from '@chakra-ui/react'
import Section from '@/components/Section'
import Paragraph from '@/components/Paragraph'
import { DownloadIcon } from '@chakra-ui/icons'
import Article from '@/components/layouts/Article'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const bg = { useColorModeValue('whiteAlpha.700', 'blackAlpha.700') }

  return (
    <Article>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-titles'>
              Leo Rodriguez
            </Heading>
            <Flex flexDir='column'>
              <Flex alignItems='center'>
                <Heading as='h2' variant='page-titles' fontSize='12px' color='#ccc' mr='5px' minW='50px'>Web:</Heading>
                <p>React / Next / Wordpress</p>
              </Flex>
              <Flex alignItems='center'>
                <Heading as='h2' variant='page-titles' fontSize='12px' color='#ccc' mr='5px' minW='50px'>Mobile:</Heading>
                <p>React Native / Swift & Swift</p>
              </Flex>
              <Flex alignItems='center'>
                <Heading as='h2' variant='page-titles' fontSize='12px' color='#ccc' mr='5px' minW='50px'>Design:</Heading>
                <p>Figma / Blender</p>
              </Flex>
            </Flex>
          </Box>
          <Flex
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            justifyContent='center'
          >
            <Box>
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
          <Paragraph>
            I love building, designing and creating things. My strengths are making sure web/mobile apps are smooth and optimized.
            I like to make sure users have a great experience and are enjoying what they see. While I primarily focus on the front end,
            I do enjoy all aspects of code. Im lucky that my hobby for developing is now my job and I couldn&apos;t
            be happier. Fun Fact - I am a self taught developer.
          </Paragraph>
          <Flex alignItems='center' my='4'>
            <Link download href="/Resume.pdf">
              <Button bg='glassTeal' color='black' rightIcon={<DownloadIcon />}>Resume</Button>
            </Link>
          </Flex>
        </Section>

        <Section delay={.3}>
          <Heading as='h3' variant='section-title'>My Socials</Heading>
          <List>
            <ListItem>
              <Link target="_blank" rel="noopener noreferrer" href="https://github.com/leorod90">
                <Button
                  variant='ghost'
                  colorScheme='glassTeal'
                  leftIcon={<Icon as={IoLogoGithub} />}
                > @leorod90</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/leo-rodriguez-957aab13b/">
                <Button
                  variant='ghost'
                  colorScheme='glassTeal'
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                > @leo-rodriguez</Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Article >
  )
}
