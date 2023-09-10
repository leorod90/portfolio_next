import ProjectGridItem from '@/components/GridItem'
import Section from '@/components/Section'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import huddlnThumbnail from "../../public/photos/me.jpg"
//MARGIN FOR CPU BOREKN it covers huddln
export default function Projects() {
  return (
    <Container >
      <Heading as='h3' fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem id='huddln' title='Huddln' thumbnail={huddlnThumbnail}>
          huddlnhuddlnhuddlnhuddlnhuddlnhuddlnss
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id='leo_eats' title='Leo Eats' thumbnail={huddlnThumbnail}>
          leo_eatsleo_eatsleo_eatsleo_eatsleo_eats
          </ProjectGridItem>
        </Section>
        {/* <Section>
          <ProjectGridItem id='leo_weather' title='Leo Weather' thumbnail={huddlnThumbnail}>
          leo_weatherleo_weatherleo_weatherleo_weatherleo_weather
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id='leo_marvel' title='Leo Marvel' thumbnail={huddlnThumbnail}>
          leo_marvelleo_marvelleo_marvelsfdhd hdss
          </ProjectGridItem>
        </Section> */}
      </SimpleGrid>
    </Container>
  )
}

