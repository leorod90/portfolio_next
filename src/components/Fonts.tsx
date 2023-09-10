import { Global } from '@emotion/react'

function Fonts() {
  return (
    <Global
      styles={`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
`} />
  )
}

export default Fonts