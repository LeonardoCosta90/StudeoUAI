import React, { useState, useCallback, useRef } from 'react';
import { Button, View, Alert } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { StatusBar } from 'react-native';

import { Container, Header, ListTitle, Content } from './styles';

const List: React.FC = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('Aula finalizada!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <ListTitle>Válvula Simples</ListTitle>
      </Header>
      <View>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId="5_9wMZ1VfzU"
          onChangeState={onStateChange}
        />
        <Button
          title={playing ? 'pausar' : 'começar'}
          onPress={togglePlaying}
        />
      </View>
      <Content />
    </Container>
  );
};

export default List;
