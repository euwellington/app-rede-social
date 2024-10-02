import React, { useEffect, useRef, useState } from 'react'
import { Avatar, Container, Content, ContentAll, Header, Name, Row, Title, User } from './styles/index.style';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TextInput, View } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';

interface Props {
  photo?: number;
  name?: string;
  address?: string;
  email?: string;
  phone?: string;
}

const CardPerfil = ({ photo, name, address, email, phone }: Props) => {

  return (
    <Container>
      <Header>
        <View style={{ flexDirection: 'row' }}>
          <Avatar source={{ uri: `https://randomuser.me/api/portraits/men/${photo}.jpg` }} />
          <View style={{ marginLeft: 10, alignSelf: 'center' }}>
            <Name>{name}</Name>
            <User>@{`${name?.split(' ')[0]}${name?.split(' ')[1]}`.toLocaleLowerCase()}</User>
          </View>
        </View>
      </Header>
      <Row>
        <Fontisto name="email" size={20} color="black" />
        <Content>{email ?? "Sem cadastro"}</Content>
        </Row>
      <Row>
        <EvilIcons name="location" size={20} color="black" />
        <Content>{address ?? "Sem cadastro"}</Content>
        </Row>
      <Row>
        <Feather name="shopping-bag" size={20} color="black" />
        <Content>{name ?? "Sem cadastro"}</Content>
        </Row>
      <Row>
        <Feather name="phone" size={20} color="black" />
        <Content>{phone ?? "Sem cadastro"}</Content>
        </Row>
    </Container>
  )
}

export default CardPerfil;
