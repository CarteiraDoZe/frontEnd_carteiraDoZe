import React from 'react'
import styles from './ListaMovimentacao.module.css'
import iconBack from '../../../assets/icons/iconBack.svg'
import { Link } from 'react-router-dom'

export function ListaMovimentacao() {
  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <div className={styles.icon}>
          <Link to="/painel"><img src={iconBack} alt="icone de retorno" /></Link>
        </div>
        <div className={styles.saldo}>
          <p>Saldo: R$2999,00</p>
        </div>  
      </header>
      <div className={styles.infoMov}>
        <div className={styles.dateMov}>
          <p>13/04/2023</p>
          <p>13/04/2023</p>
          <p>13/04/2023</p>
          <p>13/04/2023</p>
          <p>13/04/2023</p>
          <p>13/04/2023</p>
        </div>
        <div className={styles.tipoTrans}>
          <p>Entrega - Descrição Descrição</p>
          <p>Gorjeta - Descrição Descrição</p>
          <p>Diaria - Descrição Descrição</p>
          <p>Manutenção - Descrição Descrição</p>
          <p>Alimentação - Descrição Descrição</p>
          <p>Combustivel - Descrição Descrição</p>
        </div>
        <div className={styles.valorMov}>
          <p>R$6,00</p>
          <p>R$2,00</p>
          <p>R$60,00</p>
          <p>R$30,00</p>
          <p>R$15,00</p>
          <p>R$25,00</p>
        </div>
      </div>
    </div>
  )
}
