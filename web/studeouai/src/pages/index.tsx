import { Button, Flex, Stack } from '@chakra-ui/react';


import { Input } from '../components/Form/Input'
import { Logo } from '../components/Logo/index';

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
    ><Logo width="auto" fontSize="4xl" />
      <Stack width="100%" maxWidth={360} align="center" spacing="10">
        
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          padding="8"
          borderRadius={8}
          flexDir="column"
          
        >
          <Stack spacing="4">
            <Input
              name="email"
              label="E-mail"
              type="email"
              
            />
            <Input
              name="password"
              label="Senha"
              type="password"
              
            />
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="purple"
            size="lg"
           
          >
            Entrar
          </Button>
          <Button
            type="submit"
            variant="outline"
            mt="6"
            colorScheme="purple"
            size="lg"           
          >
            REGISTRAR
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
}