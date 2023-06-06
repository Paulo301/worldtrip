import { Cidades100 } from "@/Components/Cidades100";
import { ContinentBanner } from "@/Components/ContinentBanner";
import { ContinentInfo } from "@/Components/ContinentInfo";
import { Flex } from "@chakra-ui/react";

export default function Continent() {

  return (
    <>
      <ContinentBanner
        imgSrc='/images/europa/EuroBanner.png'
        continent='Europa'
      />
      <Flex 
        direction='column'
        align='center'
        mt={{base: '6', lg: '20'}}
        maxW={1160}
        mx='auto'
        pb='10'
      >
        <ContinentInfo 
          text='A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste'
          statistics={[
            { num: 50, label: 'países' },
            { num: 60, label: 'línguas' },
            { num: 27, label: 'cidades +100', tooltip: 'Informação' },
          ]}
        />
        <Cidades100 
          cities={[
            {
              image: '/images/europa/Londres.png',
              city: 'Londres',
              country: 'Reino Unido',
              flag: '/images/europa/ReinoUnido.png'
            },
            {
              image: '/images/europa/Paris.png',
              city: 'Paris',
              country: 'França',
              flag: '/images/europa/Franca.png'
            },
            {
              image: '/images/europa/Roma.png',
              city: 'Roma',
              country: 'Itália',
              flag: '/images/europa/Italia.png'
            },
            {
              image: '/images/europa/Praga.png',
              city: 'Praga',
              country: 'República Tcheca',
              flag: '/images/europa/Tcheca.png'
            },
            {
              image: '/images/europa/Amsterdã.png',
              city: 'Amsterdã',
              country: 'Holanda',
              flag: '/images/europa/Holanda.png'
            },
          ]}
        />
      </Flex>
    </>
  );
}