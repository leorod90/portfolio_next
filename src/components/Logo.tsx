import Image from "next/image";
import { useColorModeValue, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Link from "next/link";

const LogoBox = styled.span`
font-weightL bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height:20px;
padding:10px

&:hover img {
  transform: rotate(20deg)
}
`

const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`
  // const color= {useColorModeValue('gray.800', 'whiteAlpha.900')} 
  return (
    <Link href='/'>
      <LogoBox>
        {/* <Image src={footPrintImg} width={20} height={20} alt="logo" /> */}
        <Text color='whiteAlpha.900' fontWeight='bold' ml={3}>
          Leo Rodriguez
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo