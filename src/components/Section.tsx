import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

export default function Section({ children, delay = 0 }) {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .8, delay }}
      mb={6}
    >{children}</StyledDiv>
  )
}
