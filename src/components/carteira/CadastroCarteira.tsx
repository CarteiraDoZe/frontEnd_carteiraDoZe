import React from 'react'
import styles from './CadastroCarteira.module.css'
import iconBack from '../../assets/icons/iconBack.svg'

export function CadastroCarteira() {
  return (
    <div className={styles.content}>
    <header className={styles.header}>
      <div className={styles.icon}>
      <a href="/painel"><img src={iconBack} alt="icone de retorno" /></a>
      </div>
      <div className={styles.saudacoes}>
        <h2>E aí Will,</h2>
        <h2>Bora bater essa meta?</h2>
      </div>
      <div className={styles.none}><></></div>
    </header>
    <form>
      <div className={styles.form}>
      <input id="meta" placeholder="Digite o valor da sua meta" name="meta"/>
      <input id="diaria" placeholder="Digite o valor da sua diária" name="diaria"/>
      <input id="entrega" placeholder="Digite o valor da sua entrega" name="entrega"/>
      <div>
        <button type="submit">Bora!</button>
      </div>
      </div>
    </form>
  </div>
  )
}