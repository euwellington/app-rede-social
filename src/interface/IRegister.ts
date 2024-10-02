export interface IRegister
{
    nome: string;
    email: string;
    senha: string;
}

export interface IRegisterRequest extends Partial<IRegister> {};