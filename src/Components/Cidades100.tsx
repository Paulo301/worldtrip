import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { CityCard, City } from "./CityCard";

interface Cidades100Props {
  cities: City[];
}

export function Cidades100({ cities }: Cidades100Props) {
  return (
    <Box
      mt={{base: '8', lg: '20'}}
      width='100%'
      px={{base: '4', lg: '0'}}
    >
      <Text
        fontSize={{base: '2xl', lg: '4xl'}}
        fontWeight='medium'
      >
        Cidades +100
      </Text>
      <SimpleGrid
        gap='10'
        minChildWidth='64'
        mt={{base: '5', lg: '10'}}
        justifyItems={{base: 'center', lg: 'flex-start'}}
      >
        {cities.map((city) => (
          <CityCard city={city} key={city.city} />
        ))}
      </SimpleGrid>
    </Box>
  );
}