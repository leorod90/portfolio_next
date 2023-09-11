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
    <Flex w='100%' alignItems='center' direction='column' >
      <NextLink href={`/projects/${id}`}>
        {/* <LinkBox cursor='pointer'> */}
        <Flex borderRadius='10px' shadow='md' overflow='hidden'>
          <Image
            src={thumbnail}
            alt={title}
            className='grid-item-thumbnail'
            placeholder='blur'
            loading='lazy'
            style={{
              aspectRatio: 16 / 9,
              objectFit: 'cover',
              cursor: 'pointer'
            }}
          />
        </Flex>
        {/* </LinkBox> */}
      </NextLink>
      <NextLink href={`/projects/${id}`}>
        <Text mt={2} fontSize={20} cursor='pointer'>{title}</Text>
      </NextLink>
      <Text fontSize={14} textAlign='center'>{children}</Text>
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