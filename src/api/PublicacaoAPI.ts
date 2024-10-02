import { IComentario } from "../interface/IComentario";
import { IPublicacao } from "../interface/IPublicacao";
import api from "../service/api";

class PublicacaoAPI
{
    ObterTodos = async () => api.get(`/posts`);
    ObterPorId = async (id: number) => api.get(`/posts/${id}`);
    ObterComentarios = async (id: number) => api.get(`/posts/${id}/comments`);

    Adicionar = async (request: IPublicacao) => api.post<IPublicacao>(`/posts`, request);
    Atualizar = async (request: IPublicacao) => api.put(`/posts/${request.id}`, request);
    Remover = async (request: IPublicacao) => api.delete(`/posts/${request.id}`);

    AdicionarComentario = async (id: number, request: IComentario) => api.post(`/posts/${id}/comments`, request);
}

export default new PublicacaoAPI();