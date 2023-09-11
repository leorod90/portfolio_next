import { useColorModeValue, Link, Box, Container, Flex, Heading, Stack, Menu, MenuButton, IconButton, MenuList, MenuItem } from "@chakra-ui/react"
import NextLink from 'next/link'
import { HamburgerIcon } from "@chakra-ui/icons"
import ThemeToggleButton from "./ThemeToggleButton"
import Logo from "./Logo"

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
  const { path } = props
  // const bg = useColorModeValue('#f0e7db', '#202023')
  const bg = '#202023'

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
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} variant='outline' aria-label="Options" />
              <MenuList>
                <NextLink href='/' passHref>
                  <MenuItem >Home</MenuItem>
                </NextLink>
                <NextLink href='/projects' passHref>
                  <MenuItem>Projects</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
