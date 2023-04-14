import React from 'react'
import styles from './Resultado.module.css'
import iconBack from '../../../src/assets/icons/iconBack.svg'


export function Resultado() {
  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <div className={styles.icon}>
          <a href="/painel"><img src={iconBack} alt="icone de retorno" /></a>
        </div>
      </header>
      <div className={styles.infoRes}>
          <p>Meta Mensal:<span>R$3500,00</span></p>
          <p>Total de entrada:<span>R$500,00</span></p>
          <p>Total de saida:<span>R$50,00</span></p>
          <p>Saldo total:<span>R$450,00</span></p>
          <p>Km Percorrido:<span>80 km</span></p>
          <p>Ganho/km:<span>R$1,00</span></p>
          <p>Custo/km:<span>R$0,20</span></p>
          <p>Saldo/km percorrido:<span>R$0,80</span></p>
          <p>Para atingir sua meta faltam:<span>R$3050,00</span></p>
          <p>Km para atingir sua meta:<span>3812 km</span></p>
      </div>
    </div>
  )
}
