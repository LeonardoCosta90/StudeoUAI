import {
  Button,
  Flex,
  HStack,
  Link,
  Select,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { Logo } from '../../components/Header/Logo';
import { Input } from '../../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  
  return (
    <Flex
      width="100vw"
      height="100vh"
      align="center"
      justify="center"
      direction="column"
    >
      <Stack width="100%" maxWidth={360} align="center">
        <Logo/>
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          padding="8"
          borderRadius={8}
          flexDir="column"
        >
          <Stack spacing="2">
            <Input
              name="email"
              placeholder="Nome Completo"
              type="email"             
            />
            <Input
              name="email"
              placeholder="Email"
              type="email"
            />
             <Input
              name="email"
              placeholder="CPF"
              type="email"
            />
            <Input
              name="email"
              placeholder="Telefone"
              type="email"
            />
            <Input
              name="email"
              placeholder="Endereço"
              type="email"
            />        
            <Input
              name="email"
              placeholder="Estado"
              type="email"
            />
            <Input
              name="email"
              placeholder="Cidade"
              type="email"
            />       
            

            <Input
              name="password"
              placeholder="Senha"
              type="password"
            />
            <Input
              name="password"
              placeholder="Confirmar Senha"
              type="password"
            />
          </Stack>

          <Button
            size="lg"
            colorScheme="purple"
            type="submit"
            mt="4"
          >
            Registrar
          </Button>
          <Button as="a" colorScheme="whiteAlpha" mt="4" size="lg">
            Voltar
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
}