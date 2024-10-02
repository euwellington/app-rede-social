import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #fff;
    padding: 15px;
    border-color: rgba(0,0,0,0.2);
    border-bottom-width: 1px;
`;


export const Row = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
`;


export const Avatar = styled.Image`
    height: 60px;
    width: 60px;
    border-radius: 60px;
    margin-top: 3px;
`;

export const Name = styled.Text`
    font-size: 24px;
    color: rgba(0,0,0,0.7);
    font-weight: bold;
`;

export const User = styled.Text`
    font-size: 15px;
    text-transform: capitalize;

`;

export const Title = styled.Text`
    font-size: 23px;
    font-weight: bold;
`;

export const Content = styled.Text`
    font-size: 15px;
    width: 80%;
    word-wrap: break-word;
    text-align: left;
    word-break: break-all;
    color: rgba(0,0,0,0.7);
    margin-left: 10px;
    margin-top: 3px;
`;

export const ContentAll = styled.Text`
    font-size: 18px;
    color: rgba(0,0,0,0.7);
    width: 100%;
    text-align: justify;
    margin-top: 5px;
`;