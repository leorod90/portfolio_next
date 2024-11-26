import ProjectGridItem from '@/components/GridItem'
import Section from '@/components/Section'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import huddlnThumbnail from "../../public/photos/huddln_thumb.png"
import picmeThumbnail from "../../public/photos/picme_thumb.png"
import meThumbnail from "../../public/photos/me_thumb.png"
import consultarerThumbnail from "../../public/photos/consultarer_thumb.png"

//MARGIN FOR CPU BOREKN it covers huddln
export default function Work() {
  return (
    <Container >
      <Heading as='h3' fontSize={20} mb={4}>
        Work
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
          <ProjectGridItem id='picme' title='Picme' thumbnail={picmeThumbnail}>
            Picme is revolutionizing dating by bringing the first ever automated profile tech using AI.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id='huddln' title='Huddln' thumbnail={huddlnThumbnail}>
            A mobile NFT social media app with over 10k users.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id='personal_projects' title='Personal Projects' thumbnail={meThumbnail}>
            A collection of my personal Apps
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id='consultarer' title='Consultarer' thumbnail={consultarerThumbnail}>
            A market Hub that takes work, interests and virtual connections and improve how we virtually live and work.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

