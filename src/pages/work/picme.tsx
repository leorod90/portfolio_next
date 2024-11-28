import Paragraph from '@/components/Paragraph'
import { Meta, ProjectImage, Title, ProjectVideoPlayer } from '@/components/Project'
import Section from '@/components/Section'
import Article from '@/components/layouts/Article'
import { Badge, Container, List, Link, ListItem, UnorderedList, SimpleGrid, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import GreenText from '@/components/GreenText'
//
export default function Huddln() {
  return (
    <Article title='Picme'>
      <Container>
        <Title>
          Picme <Badge textTransform="none">2024 - Current</Badge>
        </Title>
        <Paragraph>
          Being the main developer for <Link href='https://www.pic.me/' rel="noopener noreferrer" target='_blank'>Picme</Link> was extremely challenging.
          While I have used React Native for years this was the first time using <GreenText>AWS</GreenText> and <GreenText>AI</GreenText>.
          Thankfully it all worked out in the end and we were able to ship the app.
        </Paragraph>
        <UnorderedList my={4}>
          <ListItem>Us AI to create a profile based on your camera roll</ListItem>
          <ListItem>Match with people who have similar interest</ListItem>
          <ListItem>Exchange messages and pictures with your matches</ListItem>
          <ListItem>Automatically update your profile with AI</ListItem>
        </UnorderedList>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://www.pic.me/' rel="noopener noreferrer" target='_blank'>https://www.pic.me/</Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>iOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React Native, AWS, Flipper</span>
          </ListItem>
        </List>
        <Flex gap={6} mt={2}>
          <Link href='https://apps.apple.com/us/app/picme-get-the-real-picture/id1526236526' rel="noopener noreferrer" target='_blank'>
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
          {/* <Link href='https://play.google.com/store/apps/details?id=com.huddln&hl=en_US&gl=US' rel="noopener noreferrer" target='_blank'>
            <Image
              width={160}
              height={60}
              src='/photos/google_play.png'
              alt='android'
              // className='grid-item-thumbnail'
              // placeholder='blur'
              loading='lazy'
            />
          </Link> */}
        </Flex>
        <Text fontWeight='bold' color='glassTeal' mt={6}>Click Videos to Pause/Play</Text>
        {/* <ProjectImage /> */}
        <SimpleGrid justifyItems='center' columns={[1, 2, 4]} gap={1} mt={3}>
          {/* <Flex direction='column' alignItems='center' gap={1} mt={3}> */}
          <ProjectVideoPlayer src={require('../../../public/mp4/picme_1.mp4')} />
          {/* <ProjectVideoPlayer src={require('../../../public/mp4/huddln_2.mp4')} />
          <ProjectVideoPlayer src={require('../../../public/mp4/huddln_3.mp4')} />
          <ProjectVideoPlayer src={require('../../../public/mp4/huddln_4.mp4')} /> */}
          {/* </Flex> */}
        </SimpleGrid>
        <Flex mb={10} />
        <ProjectImage src='/photos/picme_figma.png' alt='picme_figma' />
      </Container>
    </Article>
  )
}
