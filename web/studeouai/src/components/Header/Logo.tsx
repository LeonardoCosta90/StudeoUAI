import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize="3xl"
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
      color="purple.500"
      >
        STUDEO
        <Text as="span"color="green.500" >UAI</Text>
      </Text>
  );
}