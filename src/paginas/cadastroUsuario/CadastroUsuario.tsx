import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './Cadastrousuario.module.css'
import iconBack from '../../assets/icons/iconBack.svg'
import { Link, useNavigate } from 'react-router-dom';
import { Usuario } from '../../models/Usuario';
import { cadastro } from "../../service/Service"
import { toast } from 'react-toastify';

export function CadastroUsuario() {
let navigate = useNavigate();
const [confirmarSenha, setConfirmarSenha] = useState<string>("");
const [user, setUser] = useState<Usuario>({
  id: 0,
  nome: "",
  usuario: "",
  dataNasc: "",
  senha: ""
});
const [userResult, setUserResult] = useState<Usuario>({
  id: 0,
  nome: "",
  usuario: "",
  dataNasc: "",
  senha: ""
});

useEffect(() => {
  if (userResult.id != 0) {
      navigate("/login");
  }
}, [userResult]);

function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
  setConfirmarSenha(e.target.value);
}
function updatedModel(e: ChangeEvent<HTMLInputElement>) {
  setUser({
      ...user,
      [e.target.name]: e.target.value,
  });
}

async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
  e.preventDefault();
  try {
      if (confirmarSenha === user.senha && confirmarSenha != "") {
          await cadastro(`/usuarios/cadastrar`, user, setUserResult);
          toast.success("Usuario cadastrado com sucesso",{
              theme: "colored"
          });
      } else {
          toast.error("As senhas não conferem.",{
              theme: 'colored'
          });
      }
  } catch {
      toast.warn("Dados inconsistentes. Favor verificar as informações de cadastro.",{
          theme: 'colored'
      });
  }
}
return (
  <div className={styles.content}>
  <header className={styles.header}>
    <div className={styles.icon}>
      <Link to="/"><img src={iconBack} alt="icone de retorno" /></Link>
    </div>
    <div className={styles.infoUsuario}>
      <h2>Cadastro</h2>
    </div>
    <div className={styles.none}></div>
    </header>
    <form onSubmit={onSubmit} className="formulario">
      <div className={styles.form}>
      <input id="nome" placeholder="Nome"name="nome" value={user.nome} 
      onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
      <input id="usuario" type="email" placeholder="E-mail" name="usuario" 
      value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
      {/* <input id="nascimento" type="date" placeholder="Data de Nascimento" name="nascimento"
      value={user.dataNasc} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/> */}
      <input id="senha" placeholder="Senha" name="senha" type="password" 
      value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
      <input id="confimSenha" placeholder="Confirmação de senha" name="confimaSenha" type="password" 
      value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}/>
      <div>
        <button type="submit">Cadastrar</button>
      </div>
      </div>
    </form>
  </div>
)
}
