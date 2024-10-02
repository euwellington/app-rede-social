import React, { useEffect, useRef, useState } from 'react'
import { Avatar, Container, Content, ContentAll, Header, Name, Title, User } from './styles/index.style';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  photo: number;
  name: string;
  body: string;
}

const CardListaComentarios = ({ photo, name, body }: Props) => {

  const gerarNumeroAleatorio = (): number => Math.floor(Math.random() * (29 - 11 + 1)) + 11;

  return (
    <Container>
      <Header>
        <View style={{ flexDirection: 'row' }}>
          <Avatar source={{ uri: `https://randomuser.me/api/portraits/men/${photo}.jpg` }} />
          <View style={{ marginLeft: 10 }}>
            <Name>{name?.split(' ')[0]} {name?.split(' ')[1]} {name?.split(' ')[2]}</Name>
            <Content>{body}</Content>
          </View>
        </View>
      </Header>
    </Container>
  )
}

export default CardListaComentarios;
