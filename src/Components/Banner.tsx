import { Box, Flex, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      h={{ base: '10.188rem', lg: '20.938rem'}}
      w='100%'
      backgroundImage='/images/Background.png'
      bgSize='cover'
      px={{base: '4', lg: '0'}}
    >
      <Flex
        maxW={1160}
        h='100%'
        mx='auto'
        my={0}
        justify='space-between'
        align='center'
      >
        <VStack
          align='flex-start'
          maxW='32.75rem'
        >
          <Text
            fontWeight='medium'
            fontSize={{base: 'xl', lg: '4xl'}}
            color='light.heading_text'
          >
            5 Continentes,<br />infinitas possibilidades.
          </Text>
          <Text
            fontWeight='medium'
            fontSize={{base: 'sm', lg: '3xl'}}
            color='light.info'
            mt={{base: '2', lg: '5'}}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>

      {isWideVersion && (
        <Image
          src='/images/Airplane.svg'
          alt="airplane"
          w='26.063rem'
          h='16.875rem'
          transform='rotate(3deg)'
          mb='-120px'
        />
      )}
      </Flex>
    </Box>
  );
}