import React, { useEffect, useRef, useState } from 'react'
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
  <Badge color='#ffeedb' mr={2} >
    {children}
  </Badge>
)

export const ProjectVideoPlayer = ({ src }) => {
  // const [mounted, setMounted] = useState(false);
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   // Check if the user is on a mobile device
  //   const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  //   // Wait for the component to be mounted and the videoRef to be assigned
  //   if (mounted && videoRef.current) {
  //     const videoElement = videoRef.current;

  //     // Add the 'autoplay' attribute if the user is on a mobile device
  //     // if (isMobile) {
  //     videoElement.setAttribute('autoplay', true);
  //     // }
  //   }

  //   // Set the component as mounted
  //   setMounted(true);
  // }, [mounted]); // The effect now depends on the 'mounted' state

  return (
    <Box overflow='hidden'>
      <video controls >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};