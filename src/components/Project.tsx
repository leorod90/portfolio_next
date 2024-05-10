// @ts-nocheck

import React, { useEffect, useRef, useState } from 'react'
import NextLink from 'next/link'
import { Badge, Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => {
  return (
    <Flex alignItems='center' mb={4}>
      <NextLink href='/work'>
        <Link as='p'>
          Work
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
  <Badge color='#ffeedb' mr={2} bg='rgba(255,255,255,.1)' >
    {children}
  </Badge>
)

export const ProjectVideoPlayer = ({ src, maxWidth = '250px' }) => {
  const videoRef = useRef(null);
  const [showsControls, setShowsControls] = useState(true)

  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && /iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream) {

    } else {
      setShowsControls(false)
    }
  }, [])


  // const handleClick = () => {
  //   if (showsControls) return

  //   const videoElement = videoRef.current;

  //   if (videoElement.paused) {
  //     videoElement.play();
  //   } else {
  //     videoElement.pause();
  //   }
  // };

  const videoRef2 = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef2.current;

    if (isPlaying) {
      video?.play();
    } else {
      video?.pause();
    }
  }, [isPlaying]);

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Flex maxW={maxWidth}>
      <Box overflow="hidden" cursor='pointer' position='relative'>
        {hasWindow && (<video ref={videoRef2} onClick={playPause} controls={false} autoPlay={showsControls} loop={showsControls} muted >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>)}
      </Box>
    </Flex>
  );
};