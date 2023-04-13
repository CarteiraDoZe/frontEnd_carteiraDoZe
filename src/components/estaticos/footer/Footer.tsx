import styles from './Footer.module.css';

import React from 'react'

export function Footer() {
  return (
    <>
    <div className={styles.header}>Footer</div>
    <div className={styles.header}>
      <a href="https://github.com/ChrisPCruz99">
        <p>Christian Patrick</p>
      </a>
      <a href="https://github.com/wagnermor">
        <p>Wagner Moreira</p>
      </a>
    </div>
    </>
  )
}
