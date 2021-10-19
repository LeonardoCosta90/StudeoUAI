import React, { useCallback, useEffect, useState } from 'react';
import { Feather, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, StatusBar } from 'react-native';

import defaultAvatar from '../../assets/user.png';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  TitleContainer,
  TitleText,
  Content,
  ProfileContainer,
  Avatar,
  Name,
} from './styles';
import api from '../../services/api';

const Profile: React.FC = () => {
  const { navigate } = useNavigation();
  const { user, updateUser } = useAuth();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      setLoading(true);
      const response = await api.get('/profile');

      updateUser(response.data);
      setLoading(false);
    }

    loadProfile();
  }, [updateUser]);

  const handleExit = useCallback(() => {
    navigate('Exit');
  }, [navigate]);

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <TitleContainer>
          <TitleText>Perfil</TitleText>
          <TouchableOpacity onPress={handleExit}>
            <Feather name="power" size={25} color="#AEAEB3" />
          </TouchableOpacity>
        </TitleContainer>
      </Header>

      <Content>
        <ProfileContainer>
          <Avatar
            source={
              user.image_url && !loading
                ? { uri: user.image_url }
                : defaultAvatar
            }
          />
          <Name>{user.name}</Name>
          <Name>{user.email}</Name>
        </ProfileContainer>
      </Content>
    </Container>
  );
};

export default Profile;
