import { Text, TextProps } from '@chakra-ui/react';

type LogoProps = TextProps;

export function Logo({ ...rest }: LogoProps) {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      width="64"
      {...rest}
    >
      
      <Text as="span" color="purple.500">
      STUDEO
      </Text>
      <Text as="span" color="green.500" >
      UAI
      </Text>
    </Text>
  );
}