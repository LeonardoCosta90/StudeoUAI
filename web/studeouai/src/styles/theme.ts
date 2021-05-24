import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#181B23',
      '800': '#1F2029',
      '700': '#353646',
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#797D9A',
      '300': '#9699B0',
      '200': '#B3B5C6',
      '100': '#D1D2DC',
      '50': '#EEEEF2',
    },
    purple: {
      '900': '#322659',
      '800': '#44337A',
      '700': '#553C9A',
      '600': '#6B46C1',
      '500': '#8257E5',
      '400': '#9F7AEA',
      '300': '#B794F4',
      '200': '#D6BCFA',
      '100': '#E9D8FD',
      '50': '#FAF5FF',
    },
    green: {
      '900': '#1C4532',
      '800': '#22543D',
      '700': '#276749',
      '600': '#2F855A',
      '500': '#04D361',
      '400': '#48BB78',
      '300': '#68D391',
      '200': '#9AE6B4',
      '100': '#C6F6D5',
      '50': '#F0FFF4',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
    },
  },
});