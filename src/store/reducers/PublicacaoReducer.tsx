import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import PublicacaoAPI from '../../api/PublicacaoAPI'; // Ajuste o caminho conforme necessário
import { IPublicacao } from '../../interface/IPublicacao'; // Ajuste o caminho conforme necessário
import { IComentario } from '../../interface/IComentario';

interface PublicacaoState {
  publicacoes: IPublicacao[];
  publicacoesUsuario: IPublicacao[];
  comentarios: IComentario[];
  selecionado: IPublicacao | null;
  loading: boolean;
  error: string | null;
}

const initialState: PublicacaoState = {
  publicacoes: [],
  publicacoesUsuario: [],
  comentarios: [],
  selecionado: null,
  loading: false,
  error: null,
};

export const fetchPublicacoes = createAsyncThunk<IPublicacao[], void, { rejectValue: string }>(
  'publicacao/obterTodos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await PublicacaoAPI.ObterTodos();
      return response.data; 
    } catch (error) {
      console.error(error);
      return rejectWithValue('Erro ao obter publicações'); // Retornar um erro em caso de falha
    }
  }
);

export const fetchPublicacoesUsuarios = createAsyncThunk<IPublicacao[], number, { rejectValue: string }>(
  'publicacao/obterPorUsuario',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await PublicacaoAPI.ObterPorId(userId);
      return response.data; 
    } catch (error) {
      console.error(error);
      return rejectWithValue('Erro ao obter publicações'); // Retornar um erro em caso de falha
    }
  }
);

export const fetchPublicacoesComentarios = createAsyncThunk<IComentario[], number, { rejectValue: string }>(
  'publicacao/comentarios',
  async (postId, { rejectWithValue }) => { // Recebe postId como argumento
    try {
      const response = await PublicacaoAPI.ObterComentarios(postId);
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue('Erro ao obter comentários');
    }
  }
);

const publicacaoSlice = createSlice({
  name: 'publicacaoStore',
  initialState,
  reducers: {
    cadastrarPublicacoes: (state, action: PayloadAction<IPublicacao>) => {
      state.publicacoes.push(action.payload); 
    },
    cadastrarComentario: (state, action: PayloadAction<IComentario>) => {
      state.comentarios.push(action.payload); 
    },
    atualizarPublicacoes: (state, action: PayloadAction<IPublicacao[]>) => {
      state.publicacoes = action.payload; 
    },
    removerPublicacoes: (state, action: PayloadAction<IPublicacao>) => {
      state.publicacoes = state.publicacoes.filter(x => x.id !== action.payload.id);
    },
    definirPublicacaoSelecionado: (state, action: PayloadAction<number>) => {
      const selecionado = state.publicacoes.find(x => x.id === action.payload);
      if (selecionado) {
        state.selecionado = selecionado;
      } else {
        state.selecionado = null;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPublicacoes.pending, (state) => {
        state.loading = true; 
        state.error = null; 
      })
      .addCase(fetchPublicacoes.fulfilled, (state, action: PayloadAction<IPublicacao[]>) => {
        state.loading = false; 
        state.publicacoes = action.payload; 
      })
      .addCase(fetchPublicacoes.rejected, (state, action) => {
        state.loading = false; 
        state.error = action.payload as string;
      })

      .addCase(fetchPublicacoesComentarios.pending, (state) => {
        state.loading = true; 
        state.error = null; 
      })
      .addCase(fetchPublicacoesComentarios.fulfilled, (state, action: PayloadAction<IComentario[]>) => {
        state.loading = false; 
        state.comentarios = action.payload; 
      })
      .addCase(fetchPublicacoesComentarios.rejected, (state, action) => {
        state.loading = false; 
        state.error = action.payload as string;
      })
      
      .addCase(fetchPublicacoesUsuarios.pending, (state) => {
        state.loading = true; 
        state.error = null; 
      })
      .addCase(fetchPublicacoesUsuarios.fulfilled, (state, action: PayloadAction<IPublicacao[]>) => {
        state.loading = false; 
        state.publicacoesUsuario = action.payload; 
      })
      .addCase(fetchPublicacoesUsuarios.rejected, (state, action) => {
        state.loading = false; 
        state.error = action.payload as string;
      });
  },
});

export const { cadastrarPublicacoes, atualizarPublicacoes, cadastrarComentario, removerPublicacoes, definirPublicacaoSelecionado } = publicacaoSlice.actions;

export default publicacaoSlice.reducer;
