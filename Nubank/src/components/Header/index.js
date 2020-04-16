import React from 'react';
import {View, Text} from 'react-native';

import {Container, Top, Logo, Title} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/Nubank_Logo.png';

const Header = () => {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Abner Fonseca</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  );
};

export default Header;
