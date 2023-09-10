import { Flex, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import NextLink from 'next/link'
import { Global } from '@emotion/react'

function GridItem({
  children,
  href,
  title,
  thumbnail
}) {
  return (
    <Flex w='100%' alignItems='center'>
      <Image
        src={thumbnail}
        alt={title}
        className='grid-item-thumbnail'
        // placeholder='blur'
        loading='lazy'
      />
      <LinkOverlay href={href} target='_blank'>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </Flex>
  )
}

export default function ProjectGridItem({
  children,
  id,
  title,
  thumbnail
}) {
  return (
    <Flex w='100%' alignItems='center' direction='column'>
      <NextLink href={`/projects/${id}`} />
      <LinkBox cursor='pointer'>
        <Image
          src={thumbnail}
          alt={title}
          className='grid-item-thumbnail'
          placeholder='blur'
          loading='lazy'
        />
      </LinkBox>
      <LinkOverlay href={`/projects/${id}`} target='_blank'>
        <Text mt={2} fontSize={20}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </Flex>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)