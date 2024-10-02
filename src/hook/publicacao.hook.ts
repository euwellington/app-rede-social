import { useToast } from "react-native-toast-notifications";
import { useAppDispatch, useAppSelector } from "../store/store";
import { atualizarPublicacoes, cadastrarComentario, cadastrarPublicacoes, removerPublicacoes } from "../store/reducers/PublicacaoReducer";
import { IPublicacao } from "../interface/IPublicacao";
import PublicacaoAPI from "../api/PublicacaoAPI";
import { useState } from "react";
import { IComentario } from "../interface/IComentario";

export const usePublicacao = () => {
    const toast = useToast();
    const dispatch = useAppDispatch();
    const { error, publicacoes } = useAppSelector((state) => state.publicacaoStore);
    const [loading, setLoading] = useState(false);

    const gerarNumeroAleatorio = (): number => Math.floor(Math.random() * (29 - 11 + 1)) + 11;

    const Favoritar = (id: number) => {
        try {
            const updatedPublicacoes = publicacoes.map(x =>
                x.id === id ? { ...x, favorite: !x.favorite } : x
            );

            dispatch(atualizarPublicacoes(updatedPublicacoes));

            toast.show("Favorito atualizado com sucesso", { type: "success", duration: 1000 });
        }
        catch (e) {
            console.error(e);
            toast.show("Erro ao atualizar favorito", { type: "danger", duration: 1000 });
        }
    }

    const Publicar = async (request: IPublicacao, action: () => void) => {
        setLoading(true);
        try {
            request.userId = gerarNumeroAleatorio();
            const { data, status } = await PublicacaoAPI.Adicionar(request);
            console.log(data);
            console.log(status);
            switch (status) {
                case 201:
                    request.id = data.id;
                    dispatch(cadastrarPublicacoes(request));
                    toast.show("Publicação cadastrado com sucesso", { type: "success", duration: 1000 });
                    action();
                    break;
                case 400:
                    toast.show("Erro ao cadastrar", { type: "danger", duration: 1000 });
                    break;
                case 500:
                    toast.show("Erro interno no servidor", { type: "danger", duration: 1000 });
                    break;
                default:
                    break;

            }
            setLoading(false);
        }
        catch (e) {
            console.error(e);
            toast.show("Erro ao cadastrar publicação", { type: "danger", duration: 1000 });
            setLoading(false);
        }
    }

    const AdicionarComentatio = async (request: IComentario, action: () => void) => {
        setLoading(true);
        try {
            const { data, status } = await PublicacaoAPI.AdicionarComentario(request.id, request);
            console.log(data);
            console.log(status);
            switch (status) {
                case 201:
                    request.id = data.id;
                    dispatch(cadastrarComentario(request));
                    toast.show("Comentario cadastrado com sucesso", { type: "success", duration: 1000 });
                    action();
                    break;
                case 400:
                    toast.show("Erro ao cadastrar", { type: "danger", duration: 1000 });
                    break;
                case 500:
                    toast.show("Erro interno no servidor", { type: "danger", duration: 1000 });
                    break;
                default:
                    break;

            }
            setLoading(false);
        }
        catch (e) {
            console.error(e);
            toast.show("Erro ao cadastrar publicação", { type: "danger", duration: 1000 });
            setLoading(false);
        }
    }

    const RemoverPost = async (request: IPublicacao, action: () => void) => {
        setLoading(true);
        try {
            const { data, status } = await PublicacaoAPI.Remover(request);
            switch (status) {
                case 200:
                    request.id = data.id;
                    dispatch(removerPublicacoes(request));
                    toast.show("Post excluído com sucesso", { type: "success", duration: 1000 });
                    action();
                    break;
                case 400:
                    toast.show("Erro ao excluír", { type: "danger", duration: 1000 });
                    break;
                case 500:
                    toast.show("Erro interno no servidor", { type: "danger", duration: 1000 });
                    break;
                default:
                    break;

            }
            setLoading(false);
        }
        catch (e) {
            console.error(e);
            toast.show("Erro ao cadastrar publicação", { type: "danger", duration: 1000 });
            setLoading(false);
        }
    }

    return {
        Publicar, Favoritar, AdicionarComentatio, RemoverPost, loading
    }
}
