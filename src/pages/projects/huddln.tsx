import Paragraph from '@/components/Paragraph'
import { Meta, ProjectImage, Title, ProjectVideoPlayer } from '@/components/Project'
import Section from '@/components/Section'
import Article from '@/components/layouts/Article'
import { Badge, Container, List, Link, ListItem, UnorderedList, SimpleGrid, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import GreenText from '@/components/GreenText'

export default function Huddln() {
  return (
    <Article title='Huddln'>
      <Container>
        <Title>
          Huddln <Badge textTransform="none">2021 - Current</Badge>
        </Title>
        <Paragraph>
          I was the lead Front End Developer for our mobile app, web app and admin dashboard. UI was handled by<GreenText> Joe </GreenText>
          and <Link href='https://www.linkedin.com/in/jackie-gonzalez-56299bb5/' rel="noopener noreferrer" target='_blank'> Jackie</Link>. While
          I handled the fun UX things like animations, feedback and transitions. This was a difficult yet rewarding project that I am so happy
          to have been a part of.
        </Paragraph>
        <UnorderedList my={4}>
          <ListItem>Ability to make an NFT with your camera and upload it</ListItem>
          <ListItem>Buy, Exchange  or Sell NFT&apos;s using crypto</ListItem>
          <ListItem>Connect your wallet and track your funds with interactive graphs</ListItem>
          <ListItem>Add and message your favorite users</ListItem>
          <ListItem>Leave a like and comment on your favorite items</ListItem>
        </UnorderedList>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://discover.xp-protocol.io/' rel="noopener noreferrer" target='_blank'>https://discover.xp-protocol.io/</Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, React Native, Firebase, GraphQl, Node, Algolia</span>
          </ListItem>
        </List>

        <Flex gap={6} mt={6}>
          <Link href='https://apps.apple.com/us/app/huddln/id1503825604' rel="noopener noreferrer" target='_blank'>
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
          <Link href='https://play.google.com/store/apps/details?id=com.huddln&hl=en_US&gl=US' rel="noopener noreferrer" target='_blank'>
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
        <SimpleGrid justifyItems='center' columns={[1, 2, 4]} gap={1} mt={3}>
          {/* <Flex direction='column' alignItems='center' gap={1} mt={3}> */}
          <ProjectVideoPlayer src={require('../../../public/mp4/huddln_1.mp4')} />
          <ProjectVideoPlayer src={require('../../../public/mp4/huddln_2.mp4')} />
          <ProjectVideoPlayer src={require('../../../public/mp4/huddln_3.mp4')} />
          <ProjectVideoPlayer src={require('../../../public/mp4/huddln_4.mp4')} />
          {/* </Flex> */}
        </SimpleGrid>
      </Container>
    </Article>
  )
}
