import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #fff;
    width: 100%;
    flex: 1; /* Para ocupar todo o espaço disponível */
    padding-bottom: 80px; /* Ajuste o padding para que o CardInput não sobreponha */
    height: 100%;
`;

export const Header = styled.View`
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
    padding: 25px;
    width: 100%;
`;

export const HeaderTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const CardInput = styled.View`
    background-color: #fff;
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
    padding: 17px;
    width: 100%;
    position: absolute;
    bottom: 0; 
    z-index: 1000;
`;

export const CardInputContent = styled.TouchableOpacity`
    background-color: #f0f1f5;
    flex-direction: row;
    padding: 15px;
    border-radius: 11px;
    align-items: center; /* Centraliza verticalmente */
`;

export const Label = styled.Text`
    font-size: 15px;
    color: rgba(0,0,0,0.7);
    margin-left: 15px;
`;

export const Input = styled.TextInput`
    background-color: #f0f1f5;
    border-radius: 9px;
    width: 85%;
    margin-top: -10px;
    padding-left: 10px;
    height: 50px;
`;


export const CardAdd = styled.View`
    background-color: #fff;
    padding: 17px;
    width: 100%;
    position: absolute;
    bottom: 0; 
    z-index: 1200;
`;

export const ButtonSend = styled.TouchableOpacity`
    background-color: #138fd5;
    border-radius: 70px;
    margin-top: -13px;
    margin-left: 10px;
    height: 50px;
    width: 50px;
    justify-content: center;
    align-items: center;
`;