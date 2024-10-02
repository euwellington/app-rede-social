import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Publicacao: undefined;
  Perfil: undefined;
};

export type RouteScreenProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};
