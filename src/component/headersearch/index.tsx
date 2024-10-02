import React, { useEffect, useRef, useState } from 'react'
import { Container, Input, Label, LabelCancel } from './styles/index.style';
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native';

interface Props {
  label: string;
  onChange: (e: string) => void;
}

const HeaderSearch = ({ label, onChange }: Props) => {

  const [clicked, setClicked] = useState(false);
  const inputRef = useRef<any>(null); // Referência para o campo de texto

  useEffect(() => {
    if (inputRef.current && clicked) {
      inputRef.current.focus();
    }
    if(!clicked) onChange('');
  }, [clicked]);

  const toggleClicked = () => setClicked(!clicked);

  if (clicked) {
    return (
      <Container>
        <Input ref={inputRef} placeholder='Buscar' onChangeText={(e) => onChange(e)} />
        <TouchableOpacity onPress={toggleClicked} style={{ alignSelf: 'center', marginTop: 5 }}>
          <LabelCancel>Cancelar</LabelCancel>
        </TouchableOpacity>
      </Container>
    )
  }

  return (
    <Container>
      <Label>{label}</Label>
      <TouchableOpacity onPress={toggleClicked}>
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
    </Container>
  )
}

export default HeaderSearch;
