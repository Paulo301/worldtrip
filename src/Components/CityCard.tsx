import { Card, CardBody, HStack, Image, Stack, Text } from "@chakra-ui/react";

export type City = {
  image: string;
  city: string;
  country: string;
  flag: string;
}

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  return (
    <Card
      w='64'
      h='64'
      overflow='hidden'
    >
      <Image
        src={city.image}
      />
      <CardBody
        px='6'
        py='3'
        borderWidth='0 1px 1px 1px'
        borderColor='highlight.50'
        borderRadius='0 0 0.375rem 0.375rem'
      >
        <HStack
          justify='space-between'
          align='center'
        >
          <Stack>
            <Text
              fontSize='xl'
              fontWeight='semibold'
              lineHeight='1.563rem'
            >
              {city.city}
            </Text>
            <Text
              fontSize='md'
              fontWeight='medium'
              color='dark.info'
            >
              {city.country}
            </Text>
          </Stack>

          <Image
            src={city.flag}
            borderRadius='full'
            w='1.875rem'
          />
        </HStack>
      </CardBody>
    </Card>
  );
}