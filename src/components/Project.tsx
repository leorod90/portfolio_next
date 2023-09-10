import React from 'react'
import NextLink from 'next/link'
import { Badge, Box, Flex, Heading, Image, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => {
  return (
    <Flex alignItems='center' mb={4}>
      <NextLink href='/projects'>
        <Link as='p'>
          Projects
        </Link>
      </NextLink>
      <span>
        &nbsp;
        <ChevronRightIcon />
        &nbsp;
      </span>
      <Heading display='inline-block' as='h3' fontSize={20} >
        {children}
      </Heading>
    </Flex>
  )
}

export const ProjectImage = ({ src, alt }) => (
  <Image borderRadius='lg' w='full' src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge color='green' mr={2} >
    {children}
  </Badge>
)