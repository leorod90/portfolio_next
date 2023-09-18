import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    'html, body': {
      bg: mode('#202023', '#332421')(props),
      // bg: '#3B2725',
      color: 'white'
    },
  }),
}

const components = {
  Container: {
    // Customize the max width here
    baseStyle: {
      maxW: "1200px", // Replace with your desired max width
    },
  },
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: (props) => ({
      // color: mode('#3d7aed', '#ff63c3')(props),
      color: '#ff63c3',
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: `'Poppins', sans-serif`,
  // body: `"Poppins"', sans-serif"`
}

const icons = {
  hamburger: 'white',
}

const colors = {
  glassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors,
  icons
})

export default theme