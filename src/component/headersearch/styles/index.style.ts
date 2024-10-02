import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #fff;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: ${Platform.OS === 'ios' ? 64 : 24}px 20px 0px 20px;
    height: ${Platform.OS === 'ios' ? 110 :74}px;
`;

export const Label = styled.Text`
    font-size: 25px;
    margin-bottom: 10px;
`;

export const LabelCancel = styled.Text`
    font-size: 14px;
    color: #1090d9;
    align-self: center;
`;

export const Input = styled.TextInput`
    background-color: #f0f1f5;
    border-radius: 9px;
    width: 80%;
    margin-top: -10px;
    padding-left: 10px;
    height: ${Platform.OS === 'ios' ? 44 : 54}px;
`;