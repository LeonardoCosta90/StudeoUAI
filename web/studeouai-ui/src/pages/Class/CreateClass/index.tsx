
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import React, {useRef, useCallback, useEffect, useState, ChangeEvent} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft, FiDisc, FiFileText, FiLogIn } from "react-icons/fi";

import api from '../../../services/api'

import Header from '../../../components/Header';
import { Body } from '../../../components/Styles/Body';
import { Title } from '../../../components/Styles/Title';
import Button from '../../../components/Button/index'
import InputForm from '../../../components/InputForm';

import {
  BackButton,
  BackButtonTitleContainer,
  Container, FormButton, FormContainer, Select, Text,

} from './styles';
import Input from '../../../components/Input';
import validationErrors from '../../../utils/validateErrors';

interface UserFormData {
  name: string;
  description: string;
}

interface Category {
  id: string;
  name: string
}

const CreateClass: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const [categories, setCategories] = useState<Category[]>([])
  const [category_id, setCategory_id] = useState<string>()

  useEffect(() => {
    api.get<Category[]>('categories').then(response => {
      setCategories(response.data)
    })
  })

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;
    console.log(value)

    setCategory_id(value);
  }

  function createError() {
    Swal.fire(
      'Erro!',
      'Ocorreu um erro ao criar uma aula, verifique os dados e tente novamente.',
      'error',
    );
  }

  const handleSubmit = useCallback(
    async (data: UserFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório.'),
          description: Yup.string().required('Descrição obrigatória.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        console.log(data.name, data.description, category_id)

        await api.post('class', {
          name: data.name,
          description: data.description,
          category_id,
        })

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Aula criada com sucesso!',
          showConfirmButton: false,
          timer: 1500
        })
        history.push('/class');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = validationErrors(error);

          formRef.current?.setErrors(errors);

          return;
        }
        createError();
      }
    },
    [history],
  );

  return (
   
    <Container>
      <Header />
      <Body>
        <Toaster position="top-right" reverseOrder={false} />
        <BackButtonTitleContainer>
          <BackButton>
              <Link to="/class">
                <span>
                  <FiArrowLeft
                    size={25}
                    color={'#3D3D4D'}
                  />
                </span>
              </Link>

          </BackButton>
           <Title>Aulas</Title>    
        </BackButtonTitleContainer>

        <FormContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Text>
              <p>Nome:</p>
            </Text>

            <Input id="name" name="name" type="text"/>

            <Text>
              <p>Descrição:</p>
            </Text>
            <Input
              id="description"
              name="description"
              type="text"
            />

            <Text>
              <p>Categoria:</p>
            </Text>

            <Select
                name="category_id"
                id="category_id"
                onChange={handleSelectChange}
              >
                <option disabled>Selecione uma categoria</option>
                  {
                    categories.length > 0 &&
                      categories.map(category => (
                        <option value={category.id}>{category.name}</option>
                    ))
                  }
              </Select>

            <FormButton>
              <Button type="submit" >Salvar</Button>
            </FormButton>
          </Form>
        </FormContainer>
     
      </Body>
    </Container>
  );
}

export default CreateClass