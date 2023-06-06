import { HStack, Text, Tooltip, VStack, Icon, Box } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";
import { Statistic } from ".";

export function ContinentInfoStatistic({ num, label, tooltip }: Statistic) {
  return (
    <VStack
      gap={0}
    >
      <Text
        fontSize={{base: '2xl', lg: '5xl'}}
        fontWeight='semibold'
        color='highlight.100'
      >
        {num}
      </Text>
      <HStack
        align='center'
      >
        <Text
          fontSize={{base: 'lg', lg: '2xl'}}
          fontWeight='semibold'
        >
          {label}
        </Text>
        {!!tooltip && (
          <Tooltip label={tooltip} fontSize='md'>
            <Box 
              as='span' 
              h={{base: '0.625rem', lg: '1rem'}}
            >
              <Icon 
                as={RiInformationLine} 
                color='dark.info50' 
              />
            </Box>
          </Tooltip>
        )}
      </HStack>
    </VStack>
  );
}