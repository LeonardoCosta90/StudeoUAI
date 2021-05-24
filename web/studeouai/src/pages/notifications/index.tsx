import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Select,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { RiDeleteBinLine } from 'react-icons/ri';

import { Header} from '../../components/Header';
import {  Sidebar } from '../../components/Sidebar';
import { Pagination } from '../../components/Pagination/index';
import { Input } from '../../components/Form/Input';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export default function Notifications() {  

  return (
    <Box>
      <Header />

      <Flex
        width="100%"
        marginY="6"
        maxWidth={1680}
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" padding="8">
          <Heading size="lg" fontWeight="normal">
            NOTIFICAÇÕES
          </Heading>

          <Divider marginY="6" borderColor="gray.700" />

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th>NOTIFICAÇÃO</Th>
                <Th>MÓDULO</Th>
                <Th>DATA/HORA</Th>
                <Th>ALUNO</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Text fontWeight="bold">Aula 01 Terminada</Text>
                </Td>
                <Td>Flutter</Td>
                <Td>24/05/2021 - 12:00</Td>
                <Td>ALUNO 01</Td>
              </Tr>
            </Tbody>
            <Tbody>
            <Tr>
                <Td>
                  <Text fontWeight="bold">Aula 01 Terminada</Text>
                </Td>
                <Td>Flutter</Td>
                <Td>24/05/2021 - 12:00</Td>
                <Td>ALUNO 02</Td>
              </Tr>
            </Tbody>
            <Tbody>
            <Tr>
                <Td>
                  <Text fontWeight="bold">Aula 02 Terminada</Text>
                </Td>
                <Td>Flutter</Td>
                <Td>24/05/2021 - 12:00</Td>
                <Td>ALUNO 01</Td>
              </Tr>
            </Tbody>
            <Tbody>
            <Tr>
                <Td>
                  <Text fontWeight="bold">Aula 02 Terminada</Text>
                </Td>
                <Td>Flutter</Td>
                <Td>24/05/2021 - 12:00</Td>
                <Td>ALUNO 02</Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}