import { GetServerSideProps } from 'next';
import { FormEvent, useContext, useState } from 'react';
import { parseCookies } from 'nookies';

import { AuthContext } from '../../contexts/AuthContext';

import { withSSRGuest } from '../../utils/withSSRGuest';

import { Button, Flex, Link, Stack } from '@chakra-ui/react';

import { Input } from '../../components/Form/input';
import { Logo } from '../../components/Header/Logo';

type SignInFormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    await signIn(data);
  }

  return (
    <Flex width="100vw" height="100vh" align="center" justify="center" direction="column">
      {' '}
      <Link href="/">
        <Logo />
      </Link>
      <Stack width="100%" maxWidth={360} align="center" spacing="10" onSubmit={handleSubmit}>
        <Flex as="form" width="100%" maxWidth={360} bg="gray.800" padding="8" borderRadius={8} flexDir="column">
          <Stack spacing="4">
            <Input name="email" label="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <Input
              name="password"
              label="Senha"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Stack>

          <Button type="submit" mt="6" colorScheme="purple" size="lg" href="/dashboard">
            ENTRAR
          </Button>
          <Button type="submit" variant="outline" mt="6" colorScheme="purple" size="lg">
            REGISTRAR
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
}

export const getServerSideProps = withSSRGuest(async ctx => {
  return {
    props: {},
  };
});
