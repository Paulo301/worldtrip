import { Box, Image, Text } from "@chakra-ui/react";

interface ContinentBannerProps {
  imgSrc: string;
  continent: string;
}

export function ContinentBanner({ imgSrc, continent }: ContinentBannerProps) {
  return (
    <Box
      position='relative'
      height='31.25rem'
    >
      <Image 
        src={imgSrc}
        w='100%'
        h='100%'
      />
      <Text
        position='absolute'
        left='8.75rem'
        bottom='3.688rem'
        fontSize='5xl'
        fontWeight='semibold'
        color='light.heading_text'
        lineHeight='4.5rem'
      >
        {continent}
      </Text>
    </Box>
  );
}