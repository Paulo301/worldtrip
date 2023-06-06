import { HStack } from "@chakra-ui/react";
import { TripType } from "./TripType";

interface TripTypesProps {}

export function TripTypes({}: TripTypesProps) {
  return (
    <HStack
      justify='space-between'
      w='100%'
    >
      <TripType 
        imageSrc='/images/trip_types/cocktail.svg'
        name='vida noturna'
      />
      <TripType 
        imageSrc='/images/trip_types/surf.svg'
        name='praia'
      />
      <TripType 
        imageSrc='/images/trip_types/building.svg'
        name='moderno'
      />
      <TripType 
        imageSrc='/images/trip_types/museum.svg'
        name='clássico'
      />
      <TripType 
        imageSrc='/images/trip_types/earth.svg'
        name='e mais...'
      />
    </HStack>
  );
}