import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { CityCard, City } from "./CityCard";

interface Cidades100Props {
  cities: City[];
}

export function Cidades100({ cities }: Cidades100Props) {
  return (
    <Box
      mt='20'
      width='100%'
    >
      <Text
        fontSize='4xl'
        fontWeight='medium'
      >
        Cidades +100
      </Text>
      <SimpleGrid
        gap='10'
        minChildWidth='64'
        mt='10'
      >
        {cities.map((city) => (
          <CityCard city={city} />
        ))}
      </SimpleGrid>
    </Box>
  );
}