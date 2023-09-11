import Paragraph from '@/components/Paragraph'
import { Meta, ProjectImage, Title, ProjectVideoPlayer } from '@/components/Project'
import Section from '@/components/Section'
import Article from '@/components/layouts/Article'
import { Badge, Container, List, Link, ListItem, UnorderedList, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
// import Huddln_1 from "/mp4/huddln_1.mp4"
// import Huddln_1 from "../../../public/mp4/huddln_1.mp4"
import Huddln_1 from "../../../public/mp4/huddln_1.mp4";

export default function Huddln() {
  return (
    <Article title='Huddln'>
      <Container>
        <Title>
          Huddln <Badge>2023</Badge>
        </Title>
        <Paragraph>
          Huddln is a mobile social media marketplace that lets you transform your existing content into NFTs
          (non-fungible tokens). A new type of social-to-earn experience to encourage support from over 10k community
          members.
        </Paragraph>
        <UnorderedList my={4}>
          <ListItem>Ramen shop recommendation based on photo</ListItem>
          <ListItem>Show shops near your current location</ListItem>
          <ListItem>Open in Tabelog/Foursquare</ListItem>
        </UnorderedList>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href=''>ww.wewewe.dfds</Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, React Native</span>
          </ListItem>
        </List>

        {/* <ProjectImage /> */}
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectVideoPlayer src={require('../../../public/mp4/huddln_1.mp4')} />
          </Section>
          {/* <Section>
            <ProjectVideoPlayer src={require('../../../public/mp4/huddln_2.mp4')} />
          </Section>
          <Section>
            <ProjectVideoPlayer src={require('../../../public/mp4/huddln_3.mp4')} />
          </Section>
          <Section>
            <ProjectVideoPlayer src={require('../../../public/mp4/huddln_4.mp4')} />
          </Section> */}
        </SimpleGrid>
      </Container>
    </Article>
  )
}
