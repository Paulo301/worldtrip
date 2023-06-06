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
      gap='10'
    >
      {statistics.map((statistic) => (
        <ContinentInfoStatistic
          num={statistic.num}
          label={statistic.label}
          tooltip={statistic.tooltip}
        />
      ))}
    </HStack>
  );
}