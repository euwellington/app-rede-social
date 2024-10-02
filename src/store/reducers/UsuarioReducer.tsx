import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import UsuarioAPI from '../../api/UsuarioAPI'; // Ajuste o caminho conforme necessário
import { IComentario } from '../../interface/IComentario';
import { IUser } from '../../interface/IUsuario';
import { IPublicacao } from '../../interface/IPublicacao';

interface UsuarioState {
  usuarios: IUser[];
  usuario: IUser | null;
  publicacoesUsuario: IPublicacao[];
  comentarios: IComentario[];
  loading: boolean;
  error: string | null;
}

const initialState: UsuarioState = {
  usuarios: [],
  usuario: null,
  publicacoesUsuario: [],
  comentarios: [],
  loading: false,
  error: null,
};

export const fetchUsuario = createAsyncThunk<IUser, number, { rejectValue: string }>(
  'usuario/obterTodos',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await UsuarioAPI.ObterPorId(userId);
      console.log(response.data);
      return response.data; 
    } catch (error) {
      console.error(error);
      return rejectWithValue('Erro ao obter usuario'); // Retornar um erro em caso de falha
    }
  }
);

export const fetchPublicacoesUsuario = createAsyncThunk<IPublicacao[], number, { rejectValue: string }>(
  'publicacao/obterPorUsuario',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await UsuarioAPI.ObterPublicacaoUsuario(userId);
      return response.data; 
    } catch (error) {
      console.error(error);
      return rejectWithValue('Erro ao obter publicações'); // Retornar um erro em caso de falha
    }
  }
);

const usuarioSlice = createSlice({
  name: 'usuarioStore',
  initialState,
  reducers: {
    cadastrarUsuario: (state, action: PayloadAction<IUser>) => {
      state.usuarios.push(action.payload); 
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsuario.pending, (state) => {
        state.loading = true; 
        state.error = null; 
      })
      .addCase(fetchUsuario.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.loading = false; 
        state.usuario = action.payload; 
      })
      .addCase(fetchUsuario.rejected, (state, action) => {
        state.loading = false; 
        state.error = action.payload as string;
      })

      .addCase(fetchPublicacoesUsuario.pending, (state) => {
        state.loading = true; 
        state.error = null; 
      })
      .addCase(fetchPublicacoesUsuario.fulfilled, (state, action: PayloadAction<IPublicacao[]>) => {
        state.loading = false; 
        state.publicacoesUsuario = action.payload; 
      })
      .addCase(fetchPublicacoesUsuario.rejected, (state, action) => {
        state.loading = false; 
        state.error = action.payload as string;
      })
  },
});

export const { cadastrarUsuario } = usuarioSlice.actions;

export default usuarioSlice.reducer;