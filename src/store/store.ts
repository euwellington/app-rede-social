// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import PublicacaoReducer from './reducers/PublicacaoReducer';
import UsuarioReducer from './reducers/UsuarioReducer';

const store = configureStore({
  reducer: {
    publicacaoStore: PublicacaoReducer,
    usuarioStore: UsuarioReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
