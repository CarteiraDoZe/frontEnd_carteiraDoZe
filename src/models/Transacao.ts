import { Movimentacao } from './Movimentacao';

export interface Transacao {
  id: Number;
  tipo: String;
  movimentacao?: Movimentacao | null;
}