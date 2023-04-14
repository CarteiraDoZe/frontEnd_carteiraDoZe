import { Usuario } from "./Usuario";

export interface Carteira{
    id: number
    meta: number
    diaria: number
    usuario?: Usuario
}