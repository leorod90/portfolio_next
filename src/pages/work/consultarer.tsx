import GreenText from '@/components/GreenText'
import Paragraph from '@/components/Paragraph'
import { Meta, ProjectImage, Title, ProjectVideoPlayer } from '@/components/Project'
import Section from '@/components/Section'
import Article from '@/components/layouts/Article'
import { Badge, Container, List, Link, ListItem, UnorderedList, SimpleGrid, Flex } from '@chakra-ui/react'
import React from 'react'

export default function Consultarer() {
  return (
    <Article title='Consultarer'>
      <Container>
        <Title>
          Consultarer <Badge textTransform="none">2023 - 2034</Badge>
        </Title>
        <Paragraph>
          I was hired as a contractor to help implement the <GreenText>iOS</GreenText> version of the Consultarer app. Overall designs were done
          by <Link href='https://www.linkedin.com/in/hong-erica/' rel="noopener noreferrer" target='_blank'>Erica</Link> and{" "}
          <Link href='https://www.linkedin.com/in/harshidavedesigns/' rel="noopener noreferrer" target='_blank'>Harshi</Link>.
          I only had minor input on the UI/UX (mostly for difference between iOS and Android devices).
        </Paragraph>
        {/* <UnorderedList my={4}>
          <ListItem>Ramen shop recommendation based on photo</ListItem>
          <ListItem>Show shops near your current location</ListItem>
          <ListItem>Open in Tabelog/Foursquare</ListItem>
        </UnorderedList> */}

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://consultarer.com/' rel="noopener noreferrer" target='_blank'>whttps://consultarer.com/</Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React Native, Swift, SwiftUI, Xcode</span>
          </ListItem>
          <ListItem>
            <Meta>Other</Meta>
            <span>Jira, Agile, Figma</span>
          </ListItem>
        </List>
        <Flex mb={3} />
        <ProjectImage src='/photos/consultarer.png' alt='consultarer' />
      </Container>
    </Article>
  )
}
