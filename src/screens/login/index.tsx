import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { Button, ButtonLabel, ButtonRegistro, ButtonRegistroLabel, Container, Space, Title } from './styles/index.style';
import { RouteScreenProps } from '../../interface/IStackRouter';
import { IAuth, IAuthRequest } from '../../interface/IAuth';
import { useAuth } from '../../hook/auth.hook';
import { AuthValidation } from '../../validation/authValidation';
import Cardinput from '../../component/cardInput';
import TextError from '../../component/textErro';

const Login = ({ navigation }: RouteScreenProps) => {

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [request, setRequest] = useState<IAuthRequest>({});

  const { Login, loading } = useAuth();

  const handlerAction = () => {
    setErrors({});
    const formErrors = AuthValidation(request);
    if (Object.keys(formErrors).length === 0) {
      Login(request as IAuth, () => navigation.navigate("Home"));
    } else {
      setErrors(formErrors);
    }

  }
  const handleChange = (key: string, value: any) => setRequest({ ...request, [key]: value });

  return (
    <Container>
      <View>
        <Title>LOGIN</Title>

        <Cardinput label='E-mail' placeholder='Endereço de e-mail' onChange={(e) => handleChange("usuario", e)} />
        {errors['usuario'] && <TextError label={errors['usuario']} />}
        <Space/>
        <Cardinput label='Senha' password onChange={(e) => handleChange("senha", e)} />
        {errors['senha'] && <TextError label={errors['senha']} />}
        {errors['senhaQtd'] && <TextError label={errors['senhaQtd']} />}
        <Space/>

        <Button onPress={handlerAction}>
          {loading ? <ActivityIndicator/> : <ButtonLabel>Entrar</ButtonLabel>}
        </Button>

        <ButtonRegistro onPress={() => navigation.navigate("Register")}>
          <ButtonRegistroLabel>Criar nova conta</ButtonRegistroLabel>
        </ButtonRegistro>
      </View>
    </Container>
  )
}

export default Login;
