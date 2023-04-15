import React from 'react'
import styles from './Resultado.module.css'
import iconBack from '../../../src/assets/icons/iconBack.svg'
import { Link } from 'react-router-dom'


export function Resultado() {
  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <div className={styles.icon}>
          <Link to="/painel"><img src={iconBack} alt="icone de retorno" /></Link>
        </div>
      </header>
      <div className={styles.infoRes}>
        <div className={styles.txtRes}>
          <p>Meta Mensal: <span>R$3500,00</span></p>
          <p>Total de entrada: </p>
          <p>Total de saida: </p>
          <p>Saldo total: </p>
          <p>Km Percorrido: </p>
          <p>Ganho/km: </p>
          <p>Custo/km: </p>
          <p>Saldo/km percorrido: </p>
          <p>Para atingir sua meta faltam: </p>
          <p>Km para atingir sua meta: </p>
        </div>
        <div className={styles.txtRes}>
          <p>R$3500,00</p>
          <p>R$500,00</p>
          <p>R$50,00</p>
          <p>R$450,00</p>
          <p>80 km</p>
          <p>R$1,00</p>
          <p>R$0,20</p>
          <p>R$0,80</p>
          <p>R$3050,00</p>
          <p>3812 km</p>
        </div>
      </div>
    </div>
  )
}
