import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, Platform, Text, View } from 'react-native'
import { Button, ButtonLabel, Container, Space } from './styles/index.style';
import Cardinput from '../../component/cardInput';
import { useToast } from "react-native-toast-notifications";
import TextError from '../../component/textErro';
import { useAuth } from '../../hook/auth.hook';
import { RouteScreenProps } from '../../interface/IStackRouter';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Feather from '@expo/vector-icons/Feather';
import { IPublicacao, IPublicacaoRequest } from '../../interface/IPublicacao';
import { PublicacaoValidation } from '../../validation/publicacaoValidation';
import { usePublicacao } from '../../hook/publicacao.hook';

interface Props
{
  close: () => void;
}

const FormPublicacao = ({ close } : Props) => {
  const toast = useToast();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [request, setRequest] = useState<IPublicacaoRequest>({});

  const { Publicar, loading } = usePublicacao();

  const handlerAction = () => {
    setErrors({});
    const formErrors = PublicacaoValidation(request);
    if (Object.keys(formErrors).length === 0) {
      Publicar(request as IPublicacao, close);
    } else {
      setErrors(formErrors);
    }
  }
  const handleChange = (key: string, value: any) => setRequest({ ...request, [key]: value });

  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Cardinput label='Título da publicação' placeholder='Adicione um título' onChange={(e) => handleChange("title", e)} />
          {errors['title'] && <TextError label={errors['title']} />}
          {errors['titleQtd'] && <TextError label={errors['titleQtd']} />}
          <Space />

          <Cardinput label='Texto da publicação' multiline placeholder='O que gostaria de compartilhar?' onChange={(e) => handleChange("body", e)} />
          {errors['body'] && <TextError label={errors['body']} />}
          {errors['bodyQtd'] && <TextError label={errors['bodyQtd']} />}
          <Space />

        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <Button onPress={handlerAction}>
        {loading ? <ActivityIndicator /> : <ButtonLabel> <Feather name="send" size={15} color="#fff" /> Publicar</ButtonLabel>}
      </Button>
    </Container>
  )
}

export default FormPublicacao;
