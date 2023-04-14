import { Usuario } from "./Usuario";

export interface Carteira{
    id: number
    meta: number
    valorEntrega: number
    diaria: number
    usuario?: Usuario | null
}