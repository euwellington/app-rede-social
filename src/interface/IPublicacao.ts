export interface IPublicacao
{
    id: number;
    userId: number;
    title: string;
    body: string;
    favorite: boolean;
} 

export interface IPublicacaoRequest extends Partial<IPublicacao> {};