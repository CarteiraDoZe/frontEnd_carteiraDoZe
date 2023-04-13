import React from 'react'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.content}>
      <div className={styles.txtHome}>
        <p>Seja bem vindo à Carteira do Zé</p>
        <p>A carteira feita para te ajudar no controle financeiro!</p>
      </div>
      <div className={styles.home}>
        <a href="/login"><button type="submit">Entrar</button></a>
        <a href="/usuario"> <button type="submit">Cadastrar</button></a>
      </div>
</div>
  )
}