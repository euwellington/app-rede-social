import React, { useRef, FC, ReactNode } from "react";
import {
  View,
  Modal,
  TouchableOpacity,
} from "react-native";
import {
  BottomSheetContainer,
  CardTransparent,
  ContainerContent,
  Content,
  Header,
  ModalContainer,
  TextButtons,
  Title,
} from "./styles/styles";
import AntDesign from '@expo/vector-icons/AntDesign';

interface Props {
  title?: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const BottomSheet: FC<Props> = ({
  title,
  open,
  onClose,
  children
}) => {
  return (
    <Modal visible={open} animationType="slide" style={{marginTop: 10}}>
      <ModalContainer>
        <BottomSheetContainer>
          <Content>
            <Header>
              <TouchableOpacity
                style={{ opacity: 1, flexDirection: "row" }}
                onPress={onClose}
              >
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
              <Title>{title}</Title>
            </Header>
            {children}
          </Content>
        </BottomSheetContainer>
      </ModalContainer>
    </Modal>
  );
};

export default BottomSheet;
