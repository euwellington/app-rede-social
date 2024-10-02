import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${Platform.OS === 'ios' ? 350 : 390}px;
`;

export const Label = styled.Text`
    font-size: 15px;
    margin-bottom: 10px;
`;

export const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: '#999', // Cor do texto do placeholder
}))`
    background-color: #f0f1f5;
    border-radius: 9px;
    padding: 15px;
`;
