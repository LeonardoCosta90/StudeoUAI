import {
  Box,
  Button,
  Checkbox,
  Divider,
Flex,
Heading,
Icon,
Table,
Tbody,
Td,
Text,
Th,
Thead,
Tr
} from '@chakra-ui/react';
import { RiAddBoxLine, RiAddLine, RiPencilLine } from 'react-icons/ri';

import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UsersList() {

  return (
    <Box>
      <Header />

      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" padding="8">
          <Flex marginBottom="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="purple"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Cadastrar Usuário
              </Button>
          
          </Flex>
          <Divider marginY="6" borderColor="gray.700" />
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th paddingX={['4', '4', '6']} color="gray.300" width="8">
                  <Checkbox colorScheme="purple" />
                </Th>
                <Th>Usuário</Th>
            <Th>Data de cadastro</Th>
             <Th>TIPO</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td paddingX={['4', '4', '6']}>
                  <Checkbox colorScheme="purple" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Leonardo Costa</Text>
                    <Text fontSize="sm" color="gray.300">
                      leonardoeverton.tec@gmail.com
                    </Text>
                  </Box>
                </Td>
           <Td>24 de Maio, 2021 </Td>
                 <Td>Instrutor</Td>
                <Td>             
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  
                </Td>
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                <Td paddingX={['4', '4', '6']}>
                  <Checkbox colorScheme="purple" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Pertry Teixeira</Text>
                    <Text fontSize="sm" color="gray.300">
                      pertrytg@gmail.com
                    </Text>
                  </Box>
                </Td>
                 <Td>24 de Maio, 2021 </Td>
                 <Td>Instrutor </Td>
                <Td>                 
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination/>
        </Box>
      </Flex>
    </Box>
  );
}