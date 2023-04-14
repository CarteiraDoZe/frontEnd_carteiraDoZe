import { Carteira } from "./Carteira";

export interface Usuario{

id: number;
nome: string
usuario: string
dataNasc: string
senha: string
carteira?: Carteira
}