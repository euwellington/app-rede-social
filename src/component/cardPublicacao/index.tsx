import React, { useEffect, useRef, useState } from 'react'
import { Avatar, Container, Content, ContentAll, Header, Name, Title, User } from './styles/index.style';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  photo: number;
  name: string;
  user: string;
  title: string;
  body: string;
  favorite: boolean;
  showAll?: boolean;
  favoriteAction?: () => void;
  publicacaoAction?: () => void;
  perfilAction: () => void;
}

const CardPublicacao = ({ photo, name, user, favorite, title, body, favoriteAction, publicacaoAction, perfilAction, showAll }: Props) => {
  
  return (
    <Container>
      <Header>
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={perfilAction}>
          <Avatar source={{ uri: `https://randomuser.me/api/portraits/men/${photo}.jpg` }} />
          <View style={{ marginLeft: 10 }}>
            <Name>{name}</Name>
            <User>@{user}</User>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={favoriteAction}>
          {
            favorite ? <AntDesign name="star" size={24} color="black" />
              : <AntDesign name="staro" size={24} color="black" />

          }
        </TouchableOpacity>
      </Header>
      <TouchableOpacity onPress={publicacaoAction}>
        <Title>{title}</Title>
        {
          showAll
          ?
          <ContentAll>{body}</ContentAll>
          :
          <Content>{body.substring(0, 100)}...</Content>
        }
      </TouchableOpacity>

    </Container>
  )
}

export default CardPublicacao;
