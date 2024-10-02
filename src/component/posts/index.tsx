import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { definirPublicacaoSelecionado, fetchPublicacoes } from '../../store/reducers/PublicacaoReducer';
import HeaderSearch from '../../component/headersearch';
import CardPublicacao from '../../component/cardPublicacao';
import { ENameuser } from '../../enums/ENameUser';
import { usePublicacao } from '../../hook/publicacao.hook';
import FloatingButton from '../floatingButton';
import BottomSheet from '../bottomSheet';
import FormPublicacao from '../formPublicacao';
import { RouteScreenProps } from '../../interface/IStackRouter';

const Posts = ({ navigation }: RouteScreenProps) => {
  const dispatch = useAppDispatch();
  const { loading, error, publicacoes } = useAppSelector((state) => state.publicacaoStore);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const toggleOpen = () => setOpen(!open);

  const { Favoritar } = usePublicacao();

  useEffect(() => {
    dispatch(fetchPublicacoes());
  }, [dispatch]);

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  if (error) {
    return <Text>Erro: {error}</Text>;
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
    <View style={{ flex: 1 }}>
      <HeaderSearch label="Início" onChange={(e) => setSearch(e)} />
      <FlatList
        data={publicacoes
          .slice()
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .filter(x =>
            (x.title && x.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) ||
            (ENameuser[x.userId] && ENameuser[x.userId].toLocaleLowerCase().includes(search.toLocaleLowerCase())) ||
            (x.body && x.body.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          ).reverse()}
        keyExtractor={(item, index) => index.toString()} // Aqui você pode usar o índice como chave
        renderItem={renderItem}
      />

      <BottomSheet
        children={<FormPublicacao close={toggleOpen} />}
        open={open}
        onClose={toggleOpen}
        title='Nova publicação'
      />

      <FloatingButton onClick={toggleOpen} />
    </View>
  );
};

export default Posts;
