import { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiLogIn,} from 'react-icons/fi';
import { AiOutlineUser, AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';


import { useAuth } from '../../hooks/auth';

import logo from '../../assets/images/logo.png'

import {
  Container,
  Body,
  FormContainer,
  LogoContainer,
  ButtonContainer,
  Text,
  BackButton,
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import validationErrors from '../../utils/validateErrors';
import toast, { Toaster } from 'react-hot-toast';
interface SignInFormData {
  name: string;
  email: string;
  password: string;
}

export function Login() {
  const formRef = useRef<FormHandles>(null);
  const [error, setError] = useState('');

  const { signIn } = useAuth();

  const history = useHistory();

  async function handleSubmit(data: SignInFormData) {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório.'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),

        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        password: data.password,
      });

      toast.success('Usuário cadastrado com sucesso!');
      history.push('/simple-piston');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = validationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
       toast.error('O email já se encontra em uso!');
    }
  }

  return (
    <Container>
       <BackButton>
            <Link to="/">
              <span>
                <FiArrowLeft
                  size={40}
                  color={'#3D3D4D'}
                />
              </span>
            </Link>
          </BackButton>

           <h1>Crie a sua conta.</h1>

          <h3>
            Faça o seu cadastro de forma <br/>
            rápida e fácil.
          </h3>
      <Body>
        <LogoContainer>
          <img src={logo} alt="Logo" />
        </LogoContainer>

        <FormContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
             <Text>
              <p>Nome:</p>
            </Text>

            <Input id="name" name="name" placeholder="Nome" icon={AiOutlineUser} />
            <Text>
              <p>E-mail:</p>
            </Text>

            <Input id="email" name="email" placeholder="Email" icon={AiOutlineMail} />

            <Text>
              <p>Senha:</p>
            </Text>
            <Input
              id="password"
              name="password"
              type="password"
              icon={AiOutlineLock}
               placeholder="Senha"
            />

             <ButtonContainer>
                <Button type="submit" name="register" color="primary" >Cadastrar</Button>
                <Toaster />
              </ButtonContainer>
          </Form>
        </FormContainer>
      </Body>
    </Container>
  );
}

export default Login;
