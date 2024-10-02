import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Keyboard, KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { Button, ButtonLabel, Container, Space } from './styles/index.style';
import Cardinput from '../../component/cardInput';
import { useToast } from "react-native-toast-notifications";
import TextError from '../../component/textErro';
import { RegisterValidation } from '../../validation/registerValidation';
import { IRegister, IRegisterRequest } from '../../interface/IRegister';
import { useAuth } from '../../hook/auth.hook';
import { RouteScreenProps } from '../../interface/IStackRouter';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useAppDispatch, useAppSelector } from '../../store/store';
import CardPublicacao from '../../component/cardPublicacao';
import { ENameuser } from '../../enums/ENameUser';
import { usePublicacao } from '../../hook/publicacao.hook';
import CardComentarios from '../../component/comentarios';
import { definirPublicacaoSelecionado } from '../../store/reducers/PublicacaoReducer';
import CardPerfil from '../../component/cardPerfil';
import { fetchPublicacoesUsuario, fetchUsuario } from '../../store/reducers/UsuarioReducer';

const Perfil = ({ navigation }: RouteScreenProps) => {

  const dispatch = useAppDispatch();
  const { selecionado } = useAppSelector((state) => state.publicacaoStore);
  const { loading, error, usuario, publicacoesUsuario } = useAppSelector((state) => state.usuarioStore);
  const { Favoritar } = usePublicacao();


  useEffect(() => {
    if (selecionado) dispatch(fetchUsuario(selecionado.userId));
    if (selecionado) dispatch(fetchPublicacoesUsuario(selecionado.userId));
  }, [dispatch]);

  if (!selecionado) {
    return (
      <Text>NENHUMA PUBLICAÇÃO SELECIONADA</Text>
    );
  }

  const renderItem = ({ item }: any) => {
    const userName = ENameuser[item.userId];
    const userInitials = `${userName?.split(' ')[0]}${userName?.split(' ')[1]}`.toLocaleLowerCase();
    return (
      <CardPublicacao
        photo={item.userId}
        name={userName}
        favorite={item.favorite}
        user={userInitials}
        title={item.title}
        body={item.body}
        perfilAction={() => {
          dispatch(definirPublicacaoSelecionado(item.id));
          navigation.navigate("Perfil")
        }
        }
        favoriteAction={() =>
          Favoritar(item.id)
        }
        publicacaoAction={() => {
          dispatch(definirPublicacaoSelecionado(item.id));
          navigation.navigate("Publicacao")
        }

        }
      />
    );
  };

  return (
    <Container>
      <Space />
      <CardPerfil
        photo={usuario?.id}
        name={ENameuser[usuario?.id || 0]}
        address={usuario?.address.city}
        email={usuario?.email}
        phone={usuario?.phone}
      />

      <FlatList
        data={publicacoesUsuario
          .slice()
          .sort((a, b) => (a.id > b.id ? 1 : -1)).reverse()}
        keyExtractor={(item, index) => index.toString()} // Aqui você pode usar o índice como chave
        renderItem={renderItem}
      />
    </Container>
  );
}

export default Perfil;
