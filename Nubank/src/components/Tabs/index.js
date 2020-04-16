import React from 'react';
import {View, Text} from 'react-native';
import {Container, TabsContainer, TabItem, TabText} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tabs = ({translateY}) => {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.1],
          extrapolate: 'clamp',
        }),
      }}>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#fff" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#fff" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#fff" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#fff" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#fff" />
          <TabText>Bloquear Cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
};

export default Tabs;