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
        mt={{base: '9', lg: '28'}}
        maxW={1160}
        mx='auto'
        pb='10'
      >
        <TripTypes />
        <Divider
          mt='5'
          w={{base: '3.75rem', lg: '5.625rem'}}
          h='2px'
          borderBottomWidth='0.125rem'
          borderColor='dark.heading_text'
        />
        <Text
          textAlign='center'
          mt={{base: '6', lg: '12'}}
          fontWeight='medium'
          fontSize={{base: 'xl', lg: '4xl'}}
        >
          Vamos nessa?<br />Então escolha seu continente
        </Text>
        <Swiper 
          slides={[
            { imgSrc: '/images/continentes/Europa.png', link: 'europa'},
            { imgSrc: '/images/continentes/Europa.png', link: 'america_do_norte'},
            { imgSrc: '/images/continentes/Europa.png', link: 'america_do_sul'},
            { imgSrc: '/images/continentes/Europa.png', link: 'asia'},
            { imgSrc: '/images/continentes/Europa.png', link: 'oceania'},
            { imgSrc: '/images/continentes/Europa.png', link: 'africa'},
          ]}
        />
      </Flex>
    </>
  )
}
