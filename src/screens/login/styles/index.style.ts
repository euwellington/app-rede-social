import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 70px;
    color: rgba(0,0,0,0.9);
`;

export const Space = styled.View`
    height: 30px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #1090d9;
    border-radius: 29px;
    padding: 15px;
`;

export const ButtonLabel = styled.Text`
    font-size: 15px;
    text-align: center;
    color: #fff;
`;

export const ButtonRegistro = styled.TouchableOpacity`
`;


export const ButtonRegistroLabel = styled.Text`
    color: #1090d9;
    text-align: center;
    font-size: 15px;
    margin-top: 20px;
`;
