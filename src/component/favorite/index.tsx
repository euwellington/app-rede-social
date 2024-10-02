import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { definirPublicacaoSelecionado, fetchPublicacoes } from '../../store/reducers/PublicacaoReducer';
import HeaderSearch from '../../component/headersearch';
import CardPublicacao from '../../component/cardPublicacao';
import { ENameuser } from '../../enums/ENameUser';
import { usePublicacao } from '../../hook/publicacao.hook';
import { RouteScreenProps } from '../../interface/IStackRouter';

const Favorites = ({ navigation }: RouteScreenProps) => {
  const dispatch = useAppDispatch();
  const { loading, error, publicacoes } = useAppSelector((state) => state.publicacaoStore);
  const [search, setSearch] = useState('');
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
        favoriteAction={() =>
          Favoritar(item.id)
        }
        publicacaoAction={() => {
          dispatch(definirPublicacaoSelecionado(item.id));
          navigation.navigate("Publicacao")
        }}
        perfilAction={() => {
          dispatch(definirPublicacaoSelecionado(item.id));
          navigation.navigate("Perfil")
        }}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderSearch label="Favoritos" onChange={(e) => setSearch(e)} />
      <FlatList
        data={publicacoes
          .slice()
          .sort((a, b) => (a.body > b.body ? 1 : -1))
          .filter(x =>
            (x.title && x.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) ||
            (ENameuser[x.userId] && ENameuser[x.userId].toLocaleLowerCase().includes(search.toLocaleLowerCase())) ||
            (x.body && x.body.toLocaleLowerCase().includes(search.toLocaleLowerCase())) 
          ).filter(x => x.favorite)}
        keyExtractor={(item, index) => index.toString()} // Aqui você pode usar o índice como chave
        renderItem={renderItem}
      />
    </View>
  );
};

export default Favorites;
