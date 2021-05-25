import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Link href="/profile/edit">Leonardo Costa</Link>
          <Text></Text>
          <Link color="gray.300" fontSize="small" href="/profile/edit">leonardoeverton.tec@gmail.com</Link>
        </Box>
      )}
       <Link href="/profile/edit">
       <Avatar size="md" name="Leonardo Costa" src="https://github.com/LeonardoCosta90.png" />
       </Link>
      
    </Flex>

  );
}