import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const CardTransparent = styled.View`
  width: 100%;
`;

export const ModalContainer = styled.View`
  width: 100%;
  margin-top: ${Platform.OS === "ios" ? 50 : 0}px;

`;

export const BottomSheetContainer = styled.View`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  height: 100%;
`;

export const Indicator = styled.View`
  width: 40px;
  height: 4px;
  background-color: gray;
  align-self: center;
  border-radius: 2px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ContainerContent = styled.ScrollView`
  height: 100%;
  padding: 20px;
`;

export const Header = styled.View`
flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin-bottom: -30px;
`;

export const TextButtons = styled.Text`
  font-size: 14px;
  margin-left: 6px;
  font-weight: 400;
  color: #007aff;
`;

export const CardBody = styled.View`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const InfoBodyCard = styled.View`
  margin-top: 10px;
  padding: 10px;
  background-color: whitesmoke;
  border-radius: 8px;
`;

export const InfoBody = styled.Text`
  font-weight: 600;
  color: #000;
  margin-top: 10px;
`;

export const CardContent = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 20px 0px 20px;
  background-color: "#fff";
  border-radius: 16px;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #00284e;
`;

export const Info = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #00284e;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-left: 15px;
  color: #00284e;
`;

export const Content = styled.View`
  height: 95%;
`;

export const CardInfoContant = styled.Text`
  flex-direction: row;
  margin-top: 5px;
`;

export const InfoContant = styled.Text`
  font-size: 15px;
  font-weight: 600;
  width: 23%;
`;

export const containerItemStyle = {
  borderColor: "rgba(0, 33, 71, 0.4)",
  borderWidth: 1.5,
  borderRadius: 16,
  width: "100%"
};