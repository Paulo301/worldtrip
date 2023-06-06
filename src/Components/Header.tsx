import { Box, Flex, IconButton, Image, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header() {
  const router = useRouter();

  return (
    <Flex
      maxW={1160}
      h={{base: '3.125rem', lg: '6.25rem'}}
      justify={router.asPath !== '/' ? 'space-between' : 'center'}
      align='center'
      mx='auto'
      my={0}
    >
      {router.asPath !== '/' && (
        <IconButton
          aria-label='go-back'
          icon={<Icon as={RiArrowLeftSLine} fontSize='24' />}
          onClick={() => router.push('/')}
          bg='transparent'
        />
      )}
      <Image
        src='/images/Logo.svg'
        alt="Logo"
        w={{base: '20', lg: '45'}}
        h={{base: '5', lg: '12'}}
      />
      
      {router.asPath !== '/' && <Box as='span' w='10' />}
    </Flex>
  );
}