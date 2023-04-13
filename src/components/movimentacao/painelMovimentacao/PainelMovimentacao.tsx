import React from 'react'
import styles from './PainelMovimentacao.module.css'
import iconBack from '../../../assets/icons/iconBack.svg'

export function PainelMovimentacao() {
  return (
    <div className={styles.content}>
      <header>
        <div><img src={iconBack} alt="Voltar" /></div>
      </header>
    </div>
  )
}
