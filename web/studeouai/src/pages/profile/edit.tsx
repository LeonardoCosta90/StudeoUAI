import { Box, Button, Divider, Flex, Heading, HStack, Icon, Select, SimpleGrid, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine, RiDeleteBinLine, RiSaveLine } from 'react-icons/ri';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Input } from '../../components/Form/Input';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex width="100%" maxWidth={1680} marginY="6" marginX="auto" paddingX="6">
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" padding={['6', '8']} as="form">
          <Flex marginBottom="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Editar Perfil
            </Heading>
          </Flex>

          <Divider marginY="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <span>
                Nome
                <Input name="name" label="Nome completo" placeholder="Leonardo Everton Da Costa" />
              </span>
              <span>
                Email
                <Input name="name" label="Nome completo" placeholder="leonardoeverton.tec@gmail.com" />
              </span>
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <span>
                Senha
                <Input name="name" label="Nome completo" type="password" />
              </span>
              <span>
                Repetir Senha
                <Input name="name" label="Nome completo" type="password" />
              </span>
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <span>
                Telefone
                <Input name="name" label="Nome completo" placeholder="(35) 99840-3824" />
              </span>
              <span>
                CPF
                <Input name="name" label="Nome completo" placeholder="097.964.246-90" />
              </span>
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <span>
                Estado
                <Input name="name" label="Nome completo" placeholder="Minas Gerais" />
              </span>
              <span>
                Cidade
                <Input name="name" label="Nome completo" placeholder="Santa Rita do Sapucaí" />
              </span>
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <span>
                Endereço
                <Input name="name" label="Nome completo" placeholder="Rua Doutor Delfim Rennó moreira 75 ap202" />
              </span>
              <span>
                Bairro
                <Input name="name" label="Nome completo" placeholder="Jardim Santo Antônio" />
              </span>
            </SimpleGrid>
          </VStack>

          <Flex marginTop="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha" href="/dashboard">
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme="purple" type="submit" href="/dashboard">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
