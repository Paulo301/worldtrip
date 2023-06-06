import { HStack, Text, Tooltip, VStack, Icon } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";
import { Statistic } from ".";

export function ContinentInfoStatistic({ num, label, tooltip }: Statistic) {
  return (
    <VStack
      gap={0}
    >
      <Text
        fontSize='5xl'
        fontWeight='semibold'
        color='highlight.100'
      >
        {num}
      </Text>
      <HStack
        align='center'
      >
        <Text
          fontSize='2xl'
          fontWeight='semibold'
        >
          {label}
        </Text>
        {!!tooltip && (
          <Tooltip label={tooltip} fontSize='md'>
            <span style={{ height: '1rem' }}>
              <Icon 
                as={RiInformationLine} 
                color='dark.info50' 
              />
            </span>
          </Tooltip>
        )}
      </HStack>
    </VStack>
  );
}