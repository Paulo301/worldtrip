import { Image, Text, VStack } from "@chakra-ui/react";

interface TripTypeProps {
  imageSrc: string;
  name: string;
}

export function TripType({ imageSrc, name}: TripTypeProps) {
  return (
    <VStack gap={0}>
      <Image 
        src={imageSrc}
        sizes='5'
      />
      <Text
        mt='6'
        fontSize='2xl'
        fontWeight='semibold'
        lineHeight='8'
      >
        {name}
      </Text>
    </VStack>
  );
}