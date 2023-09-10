import { Container, Heading, Text, Divider, Flex, Button } from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'

export default function NotFound() {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>Page not found!</Text>
      <Divider my={6} />

      <Flex direction='column' alignItems='center'>
        <NextLink href='/'>
          <Button bg='glassTeal'>Return to home</Button>
        </NextLink>
      </Flex>
    </Container>
  )
}
