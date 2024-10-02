export interface  IComentario
{
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}

export interface IComentarioRequest extends Partial<IComentario> {};