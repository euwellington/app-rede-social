import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { Container, Input, Label } from './styles/index.style';

interface Props
{
  label: string;
  placeholder?: string;
  password?: boolean;
  value?: string;
  multiline?: boolean;
  onChange: (e: string) => void;
}

const Cardinput = ({ label, placeholder, password, value, multiline, onChange } : Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input style={{ height: multiline ? 300 : 'auto', textAlignVertical: 'top' }} multiline={multiline} secureTextEntry={password} value={value} placeholder={placeholder ?? label} onChangeText={(e) => onChange(e)} />
    </Container>
  )
}

export default Cardinput;
