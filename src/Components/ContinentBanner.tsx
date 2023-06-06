import { Box, Image, Text } from "@chakra-ui/react";

interface ContinentBannerProps {
  imgSrc: string;
  continent: string;
}

export function ContinentBanner({ imgSrc, continent }: ContinentBannerProps) {
  return (
    <Box
      position='relative'
      height={{base: '9.375rem', lg: '31.25rem'}}
      display={{ base: 'flex', lg: 'block' }}
      alignItems='center'
      justifyContent='center'
    >
      <Image 
        src={imgSrc}
        w='100%'
        h='100%'
      />
      <Text
        position='absolute'
        left={{ lg: '8.75rem' }}
        bottom={{ lg: '3.688rem' }}
        fontSize={{base: '3xl', lg: '5xl'}}
        fontWeight='semibold'
        color='light.heading_text'
        lineHeight='4.5rem'
      >
        {continent}
      </Text>
    </Box>
  );
}