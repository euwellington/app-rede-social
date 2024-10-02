import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
    height: 100%;
    padding-top: 40px;
`;

export const Space = styled.View`
    height: 30px;
`;

export const CardInput = styled.View`
    width: 350px;
`;

export const Label = styled.Text`
    font-size: 15px;
    margin-bottom: 10px;
`;

export const Input = styled.TextInput`
    background-color: #f2f2f2;
    border-radius: 9px;
    padding: 15px;
    margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #1090d9;
    border-radius: 29px;
    padding: 15px;
    position: absolute;
    bottom: 20px;
    width: 85%;
`;

export const ButtonLabel = styled.Text`
    font-size: 17px;
    text-align: center;
    font-weight: bold;
    color: #fff;
`;