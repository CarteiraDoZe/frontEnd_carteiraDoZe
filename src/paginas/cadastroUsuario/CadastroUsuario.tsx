import React from 'react'
import styles from './Cadastrousuario.module.css'


export function CadastroUsuario() {
  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <div>
        </div>
        <div>
          <h2>Cadastre-se</h2>
        </div>
      </header>
      <form className="formulario">
        {/* <label htmlFor="nome">Nome</label> */}
        <div className={styles.form}>
        <input id="nome" placeholder="Nome"name="nome"/>
        <input id="usuario" type="email" placeholder="E-mail" name="usuario"/>
        <input id="nascimento" type="date" placeholder="Data de Nascimento" name="nascimento"/>
        <input id="senha" placeholder="Senha" name="senha" type="password"/>
        <input id="confimSenha" placeholder="Confirmação de senha" name="confimaSenha" type="password"/>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
        </div>
      </form>
    </div>
  )
}
