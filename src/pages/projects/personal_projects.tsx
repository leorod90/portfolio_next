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

        <Flex gap={6} mt={6}>
          <Link href='https://apps.apple.com/us/app/leo-eats/id1590637132' rel="noopener noreferrer" target='_blank'>
            <Image
              width={160}
              height={60}
              src='/photos/app_store.png'
              alt='apple'
              // className='grid-item-thumbnail'
              // placeholder='blur'
              loading='lazy'
            />
          </Link>
          <Link href='https://play.google.com/store/apps/details?id=expo.leorod18.good_eats' rel="noopener noreferrer" target='_blank'>
            <Image
              width={160}
              height={60}
              src='/photos/google_play.png'
              alt='android'
              // className='grid-item-thumbnail'
              // placeholder='blur'
              loading='lazy'
            />
          </Link>
        </Flex>

        <Text fontWeight='bold' color='glassTeal' mt={6}>Click Videos to Pause/Play</Text>

        {/* <ProjectImage /> */}
        <SimpleGrid columns={[1, 1, 2]} gap={1} mt={3}>
          <Section>
            <ProjectVideoPlayer src={require('../../../public/mp4/eats_1.mp4')} />
          </Section>
          <Section>
            <ProjectVideoPlayer src={require('../../../public/mp4/eats_2.mp4')} />
          </Section>
        </SimpleGrid>

        <Flex gap={6} my={3} w='100%' justifyContent='flex-end'>
          {/* <Link href='https://apps.apple.com/us/app/huddln/id1503825604' rel="noopener noreferrer" target='_blank'>
            <Image
              width={160}
              height={60}
              src='/photos/app_store.png'
              alt='apple'
              // className='grid-item-thumbnail'
              // placeholder='blur'
              loading='lazy'
            />
          </Link> */}
          <Link href='https://play.google.com/store/apps/details?id=com.leo_marvel' rel="noopener noreferrer" target='_blank'>
            <Image
              width={160}
              height={60}
              src='/photos/google_play.png'
              alt='android'
              // className='grid-item-thumbnail'
              // placeholder='blur'
              loading='lazy'
            />
          </Link>
        </Flex>

        {/* <Text fontWeight='bold' color='glassTeal' mt={6}>Click Videos to Pause/Play</Text> */}

        <SimpleGrid columns={[1, 1, 2]} gap={1} mt={6}>
          <Section>
            <ProjectVideoPlayer src={require('../../../public/mp4/marvel_1.mp4')} />
          </Section>
          <Section>
            <ProjectVideoPlayer src={require('../../../public/mp4/marvel_2.mp4')} />
          </Section>
        </SimpleGrid>

        <Text my={3} fontWeight='bold' color='glassTeal' mt={6}>Bonus Video</Text>

        <Box borderRadius='5px' overflow='hidden'>
          <ProjectVideoPlayer src={require('../../../public/mp4/me_dancing.mov')} />
        </Box>
      </Container>
    </Article>
  )
}
