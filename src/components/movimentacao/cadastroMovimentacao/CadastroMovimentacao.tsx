import React from 'react'
import styles from './CadastroMovimentacao.module.css'
import iconBack from '../../../assets/icons/iconBack.svg'
import { Link } from 'react-router-dom'

export function CadastroMovimentacao() {
  return (
    <div className={styles.content}>
    <header className={styles.header}>
      <div className={styles.icon}>
        <Link to="/painel"><img src={iconBack} alt="icone de retorno" /></Link>
      </div>
      <div className={styles.saudacoes}>
        <h2>Digite o valor da</h2>
        <h2>Entrega:</h2>
      </div>
      <div className={styles.none}><></></div>
    </header>
    <form>
      <div className={styles.form}>
      <input id="valor" placeholder="Valor da entrega" name="meta"/>
      <input id="descricao" placeholder="Descrição" name="descricao"/>
      <div>
        <button type="submit">Regristrar</button>
      </div>
      </div>
    </form>
  </div>
  )
}
