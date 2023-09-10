import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

export default function ThemeToggleButton() {
  const { toggleColorMode } = useColorMode()
  const color = useColorModeValue('purple', 'orange')
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />)

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        style={{
          display: 'inline-block'
        }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: .2 }}
      >
        <IconButton
          aria-label='Toggle theme'
          colorScheme={color}
          icon={icon}
          onClick={toggleColorMode}></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}
