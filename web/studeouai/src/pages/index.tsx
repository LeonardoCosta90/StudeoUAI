import { Flex, Button, Stack,  FormLabel, FormControl } from '@chakra-ui/react'
import { Input } from '../components/form/input'

export default function SignIn() {
  return (
    <Flex 
      w="100vw"
       h="100vh"
       align="center" 
       justify="center">

      <Flex  
        as="form" 
        width="100%" 
        maxWidth={360} 
        bg="gray.800" 
        p="8" 
        borderRadius="8"
         flexDir="column"
        >
          <Stack spacing="4">            
            <Input name="email" type="email" label="E-mail"></Input>
            <Input name="password" type="password" label="Senha"></Input>            
          </Stack>
        
      <Button type="submit" mt="6" colorScheme="purple">Entrar</Button>
      <Button type="submit" mt="4" colorScheme="purple" variant="outline">Cadastrar</Button>
      </Flex>
    </Flex>
  )
}
