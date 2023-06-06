import { HStack, Text } from "@chakra-ui/react";

import { ContinentInfoStatistics, Statistic } from "./ContinentInfoStatistics";

interface ContinentInfoProps {
  text: string;
  statistics: Statistic[];
}

export function ContinentInfo({ text, statistics }: ContinentInfoProps) {
  return (
    <HStack
      justify='space-between'
      align='center'
      w='100%'
    >
      <Text
        maxW='37.5rem'
        textAlign='justify'
        fontSize='xl'
        fontWeight='normal'
      >
        {text}
      </Text>
      <ContinentInfoStatistics statistics={statistics} />
    </HStack>
  );
}