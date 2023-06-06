import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box
      h='20.938rem'
      w='100%'
      backgroundImage='/images/Background.png'
      bgSize='cover'
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
            fontSize='4xl'
            lineHeight='3.375rem'
            color='light.heading_text'
          >
            5 Continentes,<br />infinitas possibilidades.
          </Text>
          <Text
            fontWeight='medium'
            fontSize='xl'
            lineHeight='1.875rem'
            color='light.info'
            mt='5'
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>

        <Image
          src='/images/Airplane.svg'
          alt="airplane"
          w='26.063rem'
          h='16.875rem'
          transform='rotate(3deg)'
          mb='-120px'
        />
      </Flex>
    </Box>
  );
}