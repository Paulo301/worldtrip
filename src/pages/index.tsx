import { Banner } from '@/Components/Banner'
import { Swiper } from '@/Components/Swiper'
import { TripTypes } from '@/Components/TripTypes'
import { Box, Divider, Flex, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Banner />

      <Flex 
        direction='column'
        align='center'
        mt='28'
        maxW={1160}
        mx='auto'
        pb='10'
      >
        <TripTypes />
        <Divider
          mt='5'
          w='5.625rem'
          h='2px'
          borderBottomWidth='0.125rem'
          borderColor='dark.heading_text'
        />
        <Text
          textAlign='center'
          mt='12'
          fontWeight='medium'
          fontSize='4xl'
        >
          Vamos nessa?<br />Então escolha seu continente
        </Text>
        <Swiper 
          slides={[
            { imgSrc: '/images/continentes/Europa.png', link: 'europa'},
            { imgSrc: '/images/continentes/Europa.png', link: 'europa'},
            { imgSrc: '/images/continentes/Europa.png', link: 'europa'},
            { imgSrc: '/images/continentes/Europa.png', link: 'europa'},
            { imgSrc: '/images/continentes/Europa.png', link: 'europa'},
          ]}
        />
      </Flex>
    </>
  )
}
