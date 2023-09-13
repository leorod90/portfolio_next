// @ts-nocheck
import { useColorModeValue, Text, Box, Container, Flex, Heading, Stack, Menu, MenuButton, IconButton, MenuList, MenuItem } from "@chakra-ui/react"
import NextLink from 'next/link'
import { HamburgerIcon } from "@chakra-ui/icons"
import ThemeToggleButton from "./ThemeToggleButton"
import Logo from "./Logo"
import { useEffect, useRef, useState } from "react"

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  // const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')
  const inactiveColor = 'whiteAlpha.900'

  return (
    <NextLink href={href}>
      <Flex p={2} bg={active ? 'glassTeal' : undefined} color={active ? '#202023' : inactiveColor}>
        {children}
      </Flex>
    </NextLink>
  )
}

export default function Navbar(props) {
  const [showBurger, setShowBurger] = useState(false)
  const menuRef = useRef(null);
  const { path } = props
  // const bg = useColorModeValue('#f0e7db', '#202023')
  const bg = '#202023'

  // Add a click event listener to the document
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef?.current && !menuRef?.current?.contains(event.target)) {
        // Click occurred outside the menu, so close the menu
        setShowBurger(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bg={bg}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        flexWrap='wrap'
        alignItems='center'
        justifyContent='space-between'
      >
        <Flex alignItems='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing='tighter'>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          mt={{ base: 4, md: 2 }}
          alignItems='center'
          flexGrow={1}
        >
          <LinkItem href='/' path={path}>Home</LinkItem>
          <LinkItem href='/projects' path={path}>Projects</LinkItem>
        </Stack>
        <Flex justifyContent='flex-end'>
          {/* <ThemeToggleButton /> */}
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }} pos='relative' ref={menuRef}>
            <Box
              px='10px'
              py='8px'
              borderRadius='5px'
              borderWidth='1px'
              borderColor='#505050'
              cursor='pointer'
              onClick={() => setShowBurger(!showBurger)}
            >
              <HamburgerIcon />
            </Box>
            <Flex
              direction='column'
              bg='#303033'
              mt='10px'
              right='0px'
              zIndex={100}
              pos='absolute'
              py='6px'
              // h='px'
              w='120px'
              borderRadius='5px'
              display={{ base: showBurger ? 'flex' : 'none', md: 'none' }}
            >
              <NextLink href='/' passHref onClick={() => setShowBurger(false)}>
                <Flex
                  px='12px'
                  py='6px'
                  align='center'
                  _hover={{
                    bg: '#404043',
                    cursor: 'pointer',
                  }}
                >
                  <Text >Home</Text>
                </Flex>
              </NextLink>
              <NextLink href='/projects' passHref onClick={() => setShowBurger(false)}>
                <Flex
                  px='12px'
                  py='8px'
                  align='center'
                  _hover={{
                    bg: '#404043',
                    cursor: 'pointer',
                  }}
                >
                  <Text>Projects</Text>
                </Flex>
              </NextLink>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
