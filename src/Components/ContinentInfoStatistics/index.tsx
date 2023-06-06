import { HStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ContinentInfoStatistic } from "./ContinentInfoStatistic";

export interface Statistic {
  num: number;
  label: ReactNode;
  tooltip?: string;
}

interface ContinentInfoStatisticsProps {
  statistics: Statistic[];
}

export function ContinentInfoStatistics({ statistics }: ContinentInfoStatisticsProps) {
  return (
    <HStack
      gap={{base: '0', lg: '10'}}
      justify={{base: 'space-between', lg: 'flex-start'}}
      w={{base: '100%', lg: 'auto'}}
      mt={{base: '4', lg: '0'}}
    >
      {statistics.map((statistic) => (
        <ContinentInfoStatistic
          num={statistic.num}
          label={statistic.label}
          tooltip={statistic.tooltip}
          key={statistic.num}
        />
      ))}
    </HStack>
  );
}