import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { Label } from './styles/index.style';

interface Props
{
  label: string;
}

const TextError = ({ label } : Props) => {
  return (
      <Label>{label}</Label>
  )
}

export default TextError;
