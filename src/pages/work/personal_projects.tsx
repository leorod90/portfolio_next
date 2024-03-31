import Paragraph from '@/components/Paragraph'
import { Meta, ProjectImage, Title, ProjectVideoPlayer } from '@/components/Project'
import Section from '@/components/Section'
import Article from '@/components/layouts/Article'
import { Badge, Container, List, Link, ListItem, UnorderedList, SimpleGrid, Text, Flex, Box } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

export default function PersonalProjects() {
  return (
    <Article title='Personal Projects'>
      <Container>
        <Title>
          Personal Projects <Badge textTransform="none">2020 - Current</Badge>
        </Title>
        <Paragraph>
          I enjoying coding and designing in my free time. While I have a bunch of
          thing to show. I just picked a few of projects I am proud. Of course I&apos;ll
          be adding more!
        </Paragraph>
        <UnorderedList my={4}>
          <ListItem>Leo Eats - I enjoy cooking so I wanted to create an app that could store
            all of my recipes.</ListItem>
          <ListItem>Leo Marvel - This is one of the first React Native apps I have built.</ListItem>
          <ListItem>My Avatar - I will make him dance!!!</ListItem>
        </UnorderedList>

        <List ml={4} my={4}>
          {/* <ListItem>
            <Meta>Website</Meta>
            <Link href=''>ww.wewewe.dfds</Link>
          </ListItem> */}
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, React Native, Node, Firebase</span>
          </ListItem>
          <ListItem>
            <Meta>Design</Meta>
            <span>Blender, Figma</span>
          </ListItem>
        </List>
        <Text fontWeight='bold' color='gray' mt={6}>Oops! My android account was deleted due to inactivity,
          please bare wih me while I fix the issue.</Text>
        <Text fontWeight='bold' color='glassTeal' mt={6}>Click Videos to Pause/Play</Text>
        <SimpleGrid
          justifyItems="center"
          columns={[1, 1, 2]}
          gap={1}
          mt={3}
          flexDirection={['column', 'column', 'row']} // Change direction on small screens
        >
          <Flex
            w="100%"
            height="100%"
            justifyContent='center'
            alignItems='center'
            order={[1, 1, 1]}>
            <Flex
              direction='column'
              justifyContent='center'
              alignItems='center'
              my='15px'
              bg='#413835'
              px='5px'
              py='15'
              borderRadius='5px'>
              <Image
                width={50}
                height={50}
                src='/photos/good_eats.png'
                alt='app'
                // className='grid-item-thumbnail'
                // placeholder='blur'
                loading='lazy'
              />
              <Flex justifyContent='space-between' width='320px' mt='15px'>
                <Link href='https://apps.apple.com/us/app/leo-eats/id1590637132' rel="noopener noreferrer" target='_blank'>
                  <Image
                    width={150}
                    height={60}
                    src='/photos/app_store.png'
                    alt='apple'
                    // className='grid-item-thumbnail'
                    // placeholder='blur'
                    loading='lazy'
                  />
                </Link>
                <Box
                  filter="grayscale(100%)"
                  cursor='pointer'
                >
                  {/* <Link href='https://play.google.com/store/apps/details?id=expo.leorod18.good_eats' rel="noopener noreferrer" target='_blank'> */}
                  <Image
                    width={150}
                    height={60}
                    src='/photos/google_play.png'
                    alt='android'
                    // className='grid-item-thumbnail'
                    // placeholder='blur'
                    loading='lazy'
                  />
                  {/* </Link> */}
                </Box>
              </Flex>
              <Link mt='10px' href='https://github.com/leorod90/leo-eats' rel="noopener noreferrer" target='_blank'>
                <Image
                  width={150}
                  height={60}
                  src='/photos/github.png'
                  alt='github'
                  // className='grid-item-thumbnail'
                  // placeholder='blur'
                  loading='lazy'
                />
              </Link>
            </Flex>
          </Flex>
          <SimpleGrid
            justifyItems="center"
            columns={[2, 2, 2]}
            gap={1}
            order={[1, 1, 1]} // Change order on small screens
          >
            <ProjectVideoPlayer src={require('../../../public/mp4/eats_1.mp4')} />
            <ProjectVideoPlayer src={require('../../../public/mp4/eats_2.mp4')} />
          </SimpleGrid>
        </SimpleGrid>

        {/* <Text fontWeight='bold' color='glassTeal' mt={6}>Click Videos to Pause/Play</Text> */}

        <SimpleGrid justifyItems='center' columns={[1, 1, 2]} gap={1}>
          <Flex
            w="100%"
            height="100%"
            justifyContent='center'
            alignItems='center'
            order={[1, 1, 2]}>
            <Flex
              direction='column'
              justifyContent='center'
              alignItems='center'
              my='15px'
              bg='#413835'
              px='5px'
              py='15'
              borderRadius='5px'>
              <Image
                width={50}
                height={50}
                src='/photos/leo_marvel.png'
                alt='app'
                // className='grid-item-thumbnail'
                // placeholder='blur'
                loading='lazy'
              />
              <Flex justifyContent='flex-end' width='320px' mt='15px'>
                <Box
                  filter="grayscale(100%)"
                  cursor='pointer'
                >
                  {/* <Link href='https://play.google.com/store/apps/details?id=com.leo_marvel' rel="noopener noreferrer" target='_blank'> */}
                  <Image
                    width={150}
                    height={60}
                    src='/photos/google_play.png'
                    alt='android'
                    // className='grid-item-thumbnail'
                    // placeholder='blur'
                    loading='lazy'
                  />
                  {/* </Link> */}
                </Box>
              </Flex>
              <Link mt='10px' href='https://github.com/leorod90/leo_marvel' rel="noopener noreferrer" target='_blank'>
                <Image
                  width={150}
                  height={60}
                  src='/photos/github.png'
                  alt='git'
                  // className='grid-item-thumbnail'
                  // placeholder='blur'
                  loading='lazy'
                />
              </Link>
            </Flex>
          </Flex>
          <SimpleGrid justifyItems='center' columns={[1, 2, 2]} gap={1} order={[2, 2, 1]}>
            {/* <Flex direction='column' alignItems='center' gap={1} mt={3}> */}
            <ProjectVideoPlayer src={require('../../../public/mp4/marvel_1.mp4')} />
            <ProjectVideoPlayer src={require('../../../public/mp4/marvel_2.mp4')} />
            {/* </Flex> */}
          </SimpleGrid>
        </SimpleGrid>


        <Text my={3} fontWeight='bold' color='glassTeal' mt={6}>Bonus Video</Text>

        <Box borderRadius='5px' overflow='hidden'>
          <ProjectVideoPlayer maxWidth='100%' src={require('../../../public/mp4/me_dancing.mov')} />
        </Box>
      </Container>
    </Article>
  )
}
