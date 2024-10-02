import api from "../service/api";

class UsuarioAPI {
    ObterPorId = async (id: number) => api.get(`/users/${id}`);
    ObterPublicacaoUsuario = async (id: number) => api.get(`/users/${id}/posts`);
}

export default new UsuarioAPI();