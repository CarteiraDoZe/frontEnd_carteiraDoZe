import React from 'react'

import styles from './Header.module.css'
import logo from '../../../assets/logo_carteira_do_ze.png'

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className={styles.text}>
        <p>Carteira do Zé</p>
        <p>Sua carteira inteligente</p>
      </div>
    </header>
  )
}
