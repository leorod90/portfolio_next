import ProjectGridItem from '@/components/GridItem'
import Section from '@/components/Section'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import huddlnThumbnail from "../../public/photos/me.jpg"

export default function Projects() {
  return (
    <Container>
      <Heading as='h3' fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem id='huddln' title='Huddln' thumbnail={huddlnThumbnail}>
            dfdafdijsfid sfuds hf dusfhusd hfuds f dhsfdhd hdss
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id='leo_eats' title='Leo Eats' thumbnail={huddlnThumbnail}>
            dfdafdijsfid sfuds hf dusfhusd hfuds f dhsfdhd hdss
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id='leo_weather' title='Leo Weather' thumbnail={huddlnThumbnail}>
            dfdafdijsfid sfuds hf dusfhusd hfuds f dhsfdhd hdss
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id='leo_marvel' title='Leo Marvel' thumbnail={huddlnThumbnail}>
            dfdafdijsfid sfuds hf dusfhusd hfuds f dhsfdhd hdss
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

