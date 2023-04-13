import React from 'react'
import styles from './Cadastrousuario.module.css'
import iconBack from '../../assets/icons/iconBack.svg'

export function CadastroUsuario() {
  return (
    <div className={styles.content}>
    <header className={styles.header}>
      <div className={styles.icon}>
        <a href="/"><img src={iconBack} alt="icone de retorno" /></a>
      </div>
      <div className={styles.infoUsuario}>
        <h2>Cadastro</h2>
      </div>
      <div className={styles.none}></div>
      </header>
      <form className="formulario">
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
