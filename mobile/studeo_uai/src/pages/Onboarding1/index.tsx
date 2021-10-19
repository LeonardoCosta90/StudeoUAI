import React, { useCallback } from 'react';
import { StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ImageContainer,
  Numeral,
  TitleContainer,
  Title,
  SubTitle,
  Footer,
  PageIndicator,
  ActiveSquare,
  InactiveSquare,
  NextPageButton,
} from './styles';

const Onboarding1: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNextPage = useCallback(() => {
    navigate('Onboarding2');
  }, [navigate]);

  return (
    <Container>
      <ImageContainer>
        <Feather name="calendar" size={70} color="#8257E5" />
        <Numeral>01</Numeral>
      </ImageContainer>

      <TitleContainer>
        <Title>StudeoUAI, é uma plataforma de estudos</Title>
        <SubTitle>Você pode acessar as aulas tradicionais</SubTitle>
      </TitleContainer>

      <Footer>
        <PageIndicator>
          <ActiveSquare />
          <InactiveSquare />
        </PageIndicator>

        <NextPageButton onPress={handleNextPage}>
          <Feather name="chevron-right" size={26} color="#EBEBF0" />
        </NextPageButton>
      </Footer>
    </Container>
  );
};

export default Onboarding1;
