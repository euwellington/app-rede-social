export interface IAuth
{
    usuario: string;
    senha: string;
}

export interface IAuthRequest extends Partial<IAuth> {};