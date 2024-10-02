import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from 'react-native';
import { Button, ButtonLabel, Container, Space } from './styles/index.style';
import Cardinput from '../../component/cardInput';
import { useToast } from "react-native-toast-notifications";
import TextError from '../../component/textErro';
import { RegisterValidation } from '../../validation/registerValidation';
import { Feather } from "@expo/vector-icons";
import { useAuth } from '../../hook/auth.hook';
import { RouteScreenProps } from '../../interface/IStackRouter';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useAppDispatch, useAppSelector } from '../../store/store';
import CardPublicacao from '../../component/cardPublicacao';
import { ENameuser } from '../../enums/ENameUser';
import { usePublicacao } from '../../hook/publicacao.hook';
import CardComentarios from '../../component/comentarios';
import { definirPublicacaoSelecionado } from '../../store/reducers/PublicacaoReducer';

const Publicacao = ({ navigation }: RouteScreenProps) => {

  const dispatch = useAppDispatch();
  const { error, selecionado } = useAppSelector((state) => state.publicacaoStore);
  const { RemoverPost, Favoritar, loading } = usePublicacao();
  const [favorite, setFavorite] = useState(false);


  const confirmDelete = () => {
    Alert.alert(
      "Confirmação", // Título
      "Tem certeza que deseja deletar?", // Mensagem
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Confirmar",
          onPress: () => 
            {
              if(selecionado) RemoverPost(selecionado, () => navigation.navigate("Home"))
            } // Coloque aqui sua lógica de deleção
        }
      ],
      { cancelable: true }
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          disabled={loading}
          style={{
            marginLeft: 10,
            padding: 10,
            backgroundColor: 'red',
            marginRight: 20,
            borderRadius: 60,
            marginTop: -5
          }}
          onPress={confirmDelete} // Chama a função de confirmação ao pressionar
        >
          {
            loading ? <ActivityIndicator color={'#fff'} /> : <Feather name="trash" size={20} color="#fff" />
          }
        </TouchableOpacity>
      )
    });

    if(selecionado) setFavorite(favorite);
  }, [navigation, loading, favorite]);

  if (!selecionado) {
    return (
      <Text>NENHUMA PUBLICAÇÃO SELECIONADA</Text>
    );
  }

  return (
    <Container>
      <Space />
      <CardPublicacao
        photo={selecionado.userId}
        name={ENameuser[selecionado.userId]}
        favorite={favorite}
        user={`${ENameuser[selecionado.userId]?.split(' ')[0]}${ENameuser[selecionado.userId]?.split(' ')[1]}`.toLocaleLowerCase()}
        title={selecionado.title}
        body={selecionado.body}
        showAll
        favoriteAction={() => 
        {
          setFavorite(!favorite);
          Favoritar(selecionado.id);
        }
        }
        publicacaoAction={() => {
          dispatch(definirPublicacaoSelecionado(selecionado.id));
          // navigation.navigate("Publicacao")
        }}
        perfilAction={() => {
          dispatch(definirPublicacaoSelecionado(selecionado.id));
          navigation.navigate("Perfil")
        }}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={'padding'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // Ajuste conforme necessário
      >
        <CardComentarios postId={selecionado.id} />
      </KeyboardAvoidingView>
    </Container>
  );
}

export default Publicacao;
