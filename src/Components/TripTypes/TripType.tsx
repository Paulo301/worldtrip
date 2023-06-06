import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TripTypeProps {
  imageSrc: string;
  name: string;
}

export function TripType({ imageSrc, name}: TripTypeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      direction={isWideVersion ? 'column' : 'row'}
      align='center'
    >
      {isWideVersion ? (
        <Image 
          src={imageSrc}
          boxSize='5.313rem'
        />
      ) : (
        <Box
          borderRadius='full'
          backgroundColor='highlight.100'
          w='0.5rem'
          h='0.5rem'
        />
      )}
      <Text
        mt={{base: '0', lg: '6'}}
        ml={{base: '2', lg: '0'}}
        fontSize={{base: 'lg', lg: '2xl'}}
        fontWeight='semibold'
      >
        {name}
      </Text>
    </Flex>
  );
}