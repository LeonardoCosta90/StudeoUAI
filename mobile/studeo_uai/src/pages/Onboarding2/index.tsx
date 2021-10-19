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

const Onboarding2: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNextPage = useCallback(() => {
    navigate('Onboarding3');
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <ImageContainer>
        <Feather name="calendar" size={70} color="#8257E5" />
        <Numeral>02</Numeral>
      </ImageContainer>

      <TitleContainer>
        <Title>Aulas virtuais</Title>
        <SubTitle>
          A plataforma contempla aulas virtuais, utilizando óculos ou
          diretamente na aplicação.
        </SubTitle>
      </TitleContainer>

      <Footer>
        <PageIndicator>
          <InactiveSquare />
          <ActiveSquare />
        </PageIndicator>

        <NextPageButton onPress={handleNextPage}>
          <Feather name="chevron-right" size={26} color="#EBEBF0" />
        </NextPageButton>
      </Footer>
    </Container>
  );
};

export default Onboarding2;
