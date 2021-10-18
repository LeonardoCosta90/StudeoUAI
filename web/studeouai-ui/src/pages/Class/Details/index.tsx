
import React, { useRef, useCallback, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory, useLocation } from 'react-router-dom'
import { FiArrowLeft, FiDisc, FiFileText } from "react-icons/fi";
import * as Yup from 'yup';

import api from '../../../services/api'

import Header from '../../../components/Header';
import { Body } from '../../../components/Styles/Body';
import { Title } from '../../../components/Styles/Title';
import Button from '../../../components/Button/index'
import InputForm from '../../../components/InputForm';

import {
  Container,
  BackButtonTitleContainer,
  BackButton,
  FormContainer,
  Text,
  FormButton,
  Span,
} from './styles';
import ReactPlayer from 'react-player';
import { useAuth } from '../../../hooks/auth';
import axios from 'axios';

interface CategoryFormData {
  name: string;
  description: string;
  type: string;
  url: string;
}

interface Class {
  id: string;
  name: string;
  description: string
  url: string;
  type: string;
}

const DetailsClass: React.FC = () => {
  const formRef = useRef<FormHandles>(null);  
  const { user } = useAuth();

  const location = useLocation();
  const classes = location.state as Class;

  function editSuccess() {
    Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Categoria editada com sucesso!',
    showConfirmButton: false,
    timer: 1500
})
  }

  function editError() {
    Swal.fire(
      'Erro!',
      'Ocorreu um erro ao editar a categoria, insera os dados corretamente!.',
      'error',
    );
  }  

  const handleSubmit = useCallback(
    async (data: CategoryFormData) => {
      try {
        
        await api.post('attended-class', {
          class_id: classes.id,
          user_id: user.id,
        })

      } catch (error) {
        console.error(error);
      }
    },
    [],
  );

  return (
    <Container>
      <Header />

      {classes.type === 'Virtual' ? (
        <ReactPlayer url={classes.url} loop={true} controls={true} width='100%' height="100%" />
      ): (
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
            
        </BackButtonTitleContainer>

        <FormContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            
            <Span>
              Título
            </Span>

            <Text         
            > {classes.name}</Text>

            <br/>
            <br/>    

            <Span>
              Aula
            </Span>

            <Text         
            > {classes.description}</Text>
            
            <FormButton>
              <Button type="submit" >Marcar como finalizada</Button>
            </FormButton>
          </Form>
        </FormContainer>
     
      </Body>
      )}

    </Container>
  );
}

export default DetailsClass