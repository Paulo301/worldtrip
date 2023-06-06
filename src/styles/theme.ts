import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    highlight: {
      '50': 'rgba(255, 186, 8, 0.5)',
      '100': '#FFBA08',
    },
    dark: {
      heading_text: '#47585B',
      info: '#999999',
      info50: 'rgba(153, 153, 153, 0.5)',
    },
    light: {
      heading_text: '#F5F8FA',
      info: '#DADADA',
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'light.heading_text',
        color: 'dark.heading_text',
      }
    }
  }
});