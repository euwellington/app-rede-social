import React, { useEffect, useRef, useState } from 'react';
import { CardInput, Container, Label, Header, HeaderTitle, CardInputContent, Input, CardAdd, ButtonSend } from './styles/index.style';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { ActivityIndicator, FlatList, Keyboard, KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchPublicacoesComentarios } from '../../store/reducers/PublicacaoReducer';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import CardListaComentarios from '../cardComentarios';
import { usePublicacao } from '../../hook/publicacao.hook';
import { IComentario, IComentarioRequest } from '../../interface/IComentario';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENameuser } from '../../enums/ENameUser';

interface Props {
  postId: number;
}

const CardComentarios = ({ postId }: Props) => {
  const dispatch = useAppDispatch();
  const { loading: loadingComentarios, error, comentarios } = useAppSelector((state) => state.publicacaoStore);
  const { AdicionarComentatio, loading } = usePublicacao();
  const [request, setRequest] = useState<IComentarioRequest>({});
  const [clicked, setClicked] = useState(false);
  const inputRef = useRef<any>(null);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      // if(request.body && request.body.length > 0) setClicked(true);
      // else 
      setClicked(false);
    });
  }, [request.body]);

  useEffect(() => {
    if (inputRef.current && clicked) {
      inputRef.current.focus();
    }
  }, [clicked]);

  const toggleClicked = () => setClicked(!clicked);

  const handlerAdd = async () => {
    request.id = postId;
    // const userId = await AsyncStorage.getItem("@userId");
    // const parsedUserId = userId ? parseInt(userId) : 0; // Garantindo que userId é um número
    // request.name = ENameuser[parsedUserId] || '';   
     AdicionarComentatio(request as IComentario, () => setClicked(false));
  }

  useEffect(() => {
    dispatch(fetchPublicacoesComentarios(postId));
  }, [dispatch, postId]);

  if (loadingComentarios) {
    return <Text>Carregando...</Text>;
  }

  if (error) {
    return <Text>Erro: {error}</Text>;
  }


  const renderItem = ({ item, index }: any) => {
    return (
      <CardListaComentarios
        photo={index}
        name={item.name}
        body={item.body}
      />
    );
  };

  return ( 
    <Container>
      <Header>
        <HeaderTitle>Comentários</HeaderTitle>
      </Header>
      <FlatList
        data={comentarios
          .slice()
          .sort((a, b) => (a.id > b.id ? 1 : -1)).reverse()} // Ordena e reverte a lista
        keyExtractor={(item) => item.id.toString()} // Usar item.id como chave
        renderItem={renderItem}
        initialNumToRender={10} // Renderiza os primeiros 10 itens inicialmente
        maxToRenderPerBatch={10} // Máximo de itens a serem renderizados por lote
        windowSize={5} // Reduz o número de itens renderizados fora da tela
        getItemLayout={(data, index) => ({
          length: 50, // Defina a altura fixa do item
          offset: 50 * index,
          index,
        })} // Melhora a performance ao evitar cálculos durante o scroll
      />
      {
        clicked &&
        <CardAdd>
          <View style={{ flexDirection: 'row' }}>
            <Input ref={inputRef as any} placeholder='Adicione um comentário' onChangeText={(e) => setRequest({ ...request, body: e })} />
            <ButtonSend onPress={handlerAdd}>
              {
                loading ?
                  <ActivityIndicator />
                  :
                  <FontAwesome6 name="arrow-right" size={24} color="#fff" />
              }
            </ButtonSend>
          </View>
        </CardAdd>
      }

      <CardInput>
        <CardInputContent onPress={toggleClicked}>
          <MaterialCommunityIcons name="message-text-outline" size={20} color="black" />
          <Label>Adicione um comentário</Label>
        </CardInputContent>
      </CardInput>


    </Container>
  );
};

export default CardComentarios;