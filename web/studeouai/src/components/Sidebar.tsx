import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiArtboardLine, RiContactsLine, RiDashboardLine } from "react-icons/ri";

export function Sidebar(){
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">GERAL</Text>
          <Stack spacing="4" mt="8" align="stretch"></Stack>
          <Link display="flex" align="center" >
            <Icon as={RiDashboardLine} fontSize="20"/>
            <Text ml="4" fontWeight="medium">Dashboard</Text>
          </Link>
          <Link display="flex" align="center" >
            <Icon as={RiContactsLine} fontSize="20"/>
            <Text ml="4" fontWeight="medium">Usuários</Text>
          </Link>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">AULAS</Text>
          <Stack spacing="4" mt="8" align="stretch"></Stack>
          <Link display="flex" align="center" >
            <Icon as={RiArtboardLine} fontSize="20"/>
            <Text ml="4" fontWeight="medium">Flutter</Text>
          </Link>
          <Link display="flex" align="center" >
            <Icon as={RiArtboardLine} fontSize="20"/>
            <Text ml="4" fontWeight="medium">ReactJS</Text>
          </Link>
          <Link display="flex" align="center" >
            <Icon as={RiArtboardLine} fontSize="20"/>
            <Text ml="4" fontWeight="medium">Pneumática</Text>
          </Link>
        </Box>
      </Stack>
     </Box>
  )
}