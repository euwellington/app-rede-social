import React, { ReactNode } from "react";
import { ToastProvider } from "react-native-toast-notifications";
import { Feather } from "@expo/vector-icons";

const ProviderToast = ({ children }: { children: ReactNode }) => {
  return (
    <ToastProvider
      placement="top" // Garante que o toast apareça no topo
      style={{
        borderRadius: 20,
        minWidth: "90%",
        justifyContent: "center",
        height: "auto",
        paddingTop: "4%", // Espaço superior
        paddingBottom: "4%", // Espaço inferior
        position: 'absolute', // Posição absoluta para garantir o posicionamento
        top: 0, // Alinha ao topo da tela
        left: 0,
        right: 0,
      }}
      duration={1000}
      animationType="slide-in"
      animationDuration={80}
      successColor="#3B843B"
      dangerColor="#F82D57"
      warningColor="#e0aa3d"
      normalColor="#00377b"
      successIcon={
        <Feather
          style={{ right: 6 }}
          name="check-circle"
          size={16}
          color="#fff"
        />
      }
      dangerIcon={
        <Feather style={{ right: 6 }} name="x-circle" size={16} color="#fff" />
      }
      warningIcon={
        <Feather
          style={{ right: 6 }}
          name="alert-triangle"
          size={16}
          color="#fff"
        />
      }
      textStyle={{ fontSize: 14, fontWeight: "500" }} // Corrigido de 500 para "500"
      swipeEnabled={true}
    >
      {children}
    </ToastProvider>
  );
};

export default ProviderToast;
