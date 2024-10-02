import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #fff;
    margin: 10px;
    padding: 15px;
    border-radius: 15px;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
`;


export const Avatar = styled.Image`
    height: 40px;
    width: 40px;
    border-radius: 60px;
    margin-top: 3px;
`;

export const Name = styled.Text`
    font-size: 18px;
`;

export const User = styled.Text`
    font-size: 13px;
    color: rgba(0,0,0,0.7);
    font-weight: bold;
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
    font-weight: bold;
`;

export const ContentAll = styled.Text`
     font-size: 15px;
    width: 80%;
    word-wrap: break-word;
    text-align: left;
    word-break: break-all;
    color: rgba(0,0,0,0.7);
    font-weight: bold;
`;