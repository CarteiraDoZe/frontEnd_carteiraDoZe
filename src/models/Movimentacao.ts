import { Transacao } from './Transacao';
import { Carteira } from "./Carteira";

export interface Movimentacao {
  id: Number;
  valorUnitario: Number;
  dataMovimentacao: String;
  descricao: String;
  quilometragem: String;
  carteira?: Carteira;
  transacao?: Transacao;
}
