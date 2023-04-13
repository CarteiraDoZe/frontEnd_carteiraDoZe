import React from 'react'

import styles from './Login.module.css'

export function Login() {
  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <div>
        </div>
        <div>
          <h2>Login</h2>
        </div>
      </header>
      <form className="formulario">
        <div className={styles.form}>
        <input id="usuario" type="email" placeholder="E-mail" name="usuario"/>
        <input id="senha" placeholder="Senha" name="senha" type="password"/>
        <div>
          <button type="submit">Entrar</button>
        </div>
        </div>
      </form>
      <p>
        <a href="/usuario">
          Cadastre-se
        </a>
      </p>
    </div>
  )
}
