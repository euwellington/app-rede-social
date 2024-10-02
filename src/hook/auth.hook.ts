import { useState } from "react";
import { IAuth } from "../interface/IAuth";
import { useToast } from "react-native-toast-notifications";
import { EXPO_PUBLIC_USER, EXPO_PUBLIC_PASSWORD } from "@env";
import { IRegister } from "../interface/IRegister";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch, useAppSelector } from "../store/store";
import { cadastrarUsuario } from "../store/reducers/UsuarioReducer";
import { IUser, IUserRequest } from "../interface/IUsuario";

export const useAuth = () => {
    const toast = useToast();
    const dispatch = useAppDispatch();
    const { error, usuarios } = useAppSelector((state) => state.usuarioStore);
    const [loading, setLoading] = useState(false);

    const Login = (request: IAuth, redirect: () => void) => {
        setLoading(true);
        try {
            const usuarioEncontrado = usuarios.find(x => x.email === request.usuario);
            if (request.usuario === EXPO_PUBLIC_USER && request.senha === EXPO_PUBLIC_PASSWORD) {
                toast.show("Autenticado com sucesso", { type: "success" });
                setTimeout(() => {
                    redirect();
                    setLoading(false);
                }, 1000);
            }
            else if (usuarioEncontrado && request.senha === usuarioEncontrado.password) {
                toast.show("Autenticado com sucesso", { type: "success" });
                AsyncStorage.setItem("@user", JSON.stringify(usuarioEncontrado));
                setTimeout(() => {
                    redirect();
                    setLoading(false);
                }, 1000);
            }
            else {
                setTimeout(() => {
                    toast.show("Usuário ou senha inválido", { type: "danger" });
                    setLoading(false);
                }, 1000);
            }

        }
        catch (e) {
            console.error(e);
        }
    }

    const Register = (request: IRegister, redirect: () => void) => {
        setLoading(true);
        try {
            var novoUsuario: IUserRequest =
            {
                id: 25,
                email: request.email,
                password: request.senha,
                phone: "(85) 9 9999 - 8888",
                address:
                {
                    city: "Fortaleza"
                }
            }

            dispatch(cadastrarUsuario(novoUsuario as IUser));
            toast.show(`Usuário ${request.nome} cadastrado com sucesso`, { type: "success" });
            setTimeout(() => {
                redirect();
                setLoading(false);
            }, 1000);
        }
        catch (e) {
            console.error(e);
        }
    }

    return {
        Login, Register, loading
    }

}