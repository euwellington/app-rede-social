import React, { useEffect, useRef, useState } from 'react'
import { Container } from './styles/index.style';
import AntDesign from '@expo/vector-icons/AntDesign';

interface Props {
  onClick: () => void;
}

const FloatingButton = ({ onClick }: Props) => {
  return (
    <Container onPress={onClick}>
      <AntDesign name="plus" size={30} color="white" />
    </Container>
  )
}

export default FloatingButton;
