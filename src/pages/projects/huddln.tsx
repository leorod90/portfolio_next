import Paragraph from '@/components/Paragraph'
import { Meta, ProjectImage, Title } from '@/components/Project'
import Article from '@/components/layouts/Article'
import { Badge, Container, List, Link, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export default function huddln() {
  return (
    <Article title='Huddln'>
      <Container>
        <Title>
          Huddln <Badge>2023</Badge>
        </Title>
        <Paragraph>
          dplfkds;kfds fksdk fdls;fkds ;lfkds ;flsdkf
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
      </Container>
    </Article>
  )
}