import { Avatar, Box, Flex, Link, Text } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { setupAPIClient } from '../../services/api';
import { withSSRAuth } from '../../utils/withSSRAuth';

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  const { user, signOut, isAuthenticated } = useContext(AuthContext);
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Link href="/profile/edit">Leonardo Costa</Link>
          <Text>{user?.email}</Text>
          <Link color="gray.300" fontSize="small" href="/profile/edit"></Link>
          <button onClick={signOut}>Sair</button>
        </Box>
      )}

      <Link href="/profile/edit">
        <Avatar size="md" name="Leonardo Costa" src="https://github.com/LeonardoCosta90.png" />
      </Link>
    </Flex>
  );
}
