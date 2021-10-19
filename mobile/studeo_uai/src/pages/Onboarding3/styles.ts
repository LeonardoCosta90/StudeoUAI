import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1b1b1f;
  align-items: center;

  padding: 0 24px;
`;

export const Logo = styled.Image`
  margin-top: 88px;
`;

export const Title = styled.Text`
  font-family: 'Archivo_600SemiBold';
  font-size: 40px;
  color: #f4f5f6;
  text-align: center;
  margin-top: 104px;
`;

export const SubTitle = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 15px;
  color: #dedde3;

  margin-top: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 112px;
  width: 100%;

  justify-content: center;
`;

export const LoginButton = styled.TouchableOpacity`
  height: 56px;
  width: 156px;
  background: #8257e5;

  align-items: center;
  justify-content: center;

  margin-right: 16px;
`;

export const SignUpButton = styled.TouchableOpacity`
  height: 56px;
  width: 156px;
  background: #29292e;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Inter_500Medium';
  font-size: 15px;
  color: #e1e1e6;
`;

export const GoBackButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const GoBackButtonText = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 13px;
  color: #7a7a80;
`;
