import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, Platform, Text, View } from 'react-native'
import { Button, ButtonLabel, Container, Space } from './styles/index.style';
import Cardinput from '../../component/cardInput';
import { useToast } from "react-native-toast-notifications";
import TextError from '../../component/textErro';
import { RegisterValidation } from '../../validation/registerValidation';
import { IRegister, IRegisterRequest } from '../../interface/IRegister';
import { useAuth } from '../../hook/auth.hook';
import { RouteScreenProps } from '../../interface/IStackRouter';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Register = ({ navigation }: RouteScreenProps) => {
  const toast = useToast();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [request, setRequest] = useState<IRegisterRequest>({});

  const { Register, loading } = useAuth();

  const handlerAction = () => {
    setErrors({});
    const formErrors = RegisterValidation(request);
    if (Object.keys(formErrors).length === 0) {
      console.log('aqui')
      Register(request as IRegister, () => navigation.navigate("Login"));
    } else {
      setErrors(formErrors);
    }
  }
  const handleChange = (key: string, value: any) => setRequest({ ...request, [key]: value });

  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Cardinput label='Nome de usuário' onChange={(e) => handleChange("nome", e)} />
          {errors['nome'] && <TextError label={errors['nome']} />}
          <Space />

          <Cardinput label='E-mail' placeholder='Endereço de e-mail' onChange={(e) => handleChange("email", e)} />
          {errors['email'] && <TextError label={errors['email']} />}
          <Space />

          <Cardinput label='Senha' placeholder='Adicione uma senha' password onChange={(e) => handleChange("senha", e)} />
          {errors['senha'] && <TextError label={errors['senha']} />}
          <Space />

     
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Button onPress={handlerAction}>
            {loading ? <ActivityIndicator /> : <ButtonLabel>Criar conta</ButtonLabel>}
          </Button>
    </Container>
  )
}

export default Register;
