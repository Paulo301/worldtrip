import { Flex, HStack, Text } from "@chakra-ui/react";

import { ContinentInfoStatistics, Statistic } from "./ContinentInfoStatistics";

interface ContinentInfoProps {
  text: string;
  statistics: Statistic[];
}

export function ContinentInfo({ text, statistics }: ContinentInfoProps) {
  return (
    <Flex
      justify={{base: 'flex-start', lg: 'space-between'}}
      align='center'
      w='100%'
      direction={{base: 'column', lg: 'row'}}
      px={{base: '4', lg: '0'}}
    >
      <Text
        maxW={{ lg: '37.5rem' }}
        textAlign='justify'
        fontSize={{base: 'sm', lg: 'xl'}}
        fontWeight='normal'
      >
        {text}
      </Text>
      <ContinentInfoStatistics statistics={statistics} />
    </Flex>
  );
}