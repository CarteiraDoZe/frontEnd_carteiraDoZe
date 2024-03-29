import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className={styles.content}>
      <div className={styles.txtHome}>
        <p>Seja bem vindo à Carteira do Zé</p>
        <p>A carteira feita para te ajudar no controle financeiro!</p>
      </div>
      <div className={styles.home}>
        <Link to="/login"><button type="submit">Entrar</button></Link>
        <Link to="/usuario"> <button type="submit">Cadastrar</button></Link>
      </div>
</div>
  )
}