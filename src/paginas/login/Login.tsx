import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addId, addToken, addName } from '../../store/tokens/Action';
import { UsuarioLogin } from '../../models/UsuarioLogin';
import { login } from '../../service/Service';
import styles from './Login.module.css'
import iconBack from '../../assets/icons/iconBack.svg'


export function Login() {
  let navigate = useNavigate();
  const [token, setToken] = useState('')
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false)

  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    dataNasc: '',
    senha: '',
    token: ''
  })

  const [respUserLogin, setRespUserLogin] = useState<UsuarioLogin>({
    id:0,
    nome:'',
    usuario:'',
    dataNasc: '',
    senha: '',
    token:''
  })

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }
  
  async function onSubmit(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault();
    try{
      setIsLoading(true)
      await login("/usuarios/logar", userLogin, setRespUserLogin)
      toast.success('Usuário logado com sucesso!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
    }catch(error){
      setIsLoading(false)
      toast.warning('Usuárioe/ou senha inválidos', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
    }
  }

  useEffect(()=>{
    if(token !== ''){
      dispatch(addToken(token))
      navigate('/')
    }
  }, [dispatch, navigate, token])

  useEffect(()=> {
    if(respUserLogin.token !== '') {
      dispatch(addToken(respUserLogin.token))
      dispatch(addId(`${respUserLogin.id}`))
      dispatch(addName(`${respUserLogin.nome}`))
      navigate('/painel')
    }
  }, [dispatch, navigate, respUserLogin.id, respUserLogin.token])
  


console.log(respUserLogin.nome)

  return (
    
    <div className={styles.content}>
      <header className={styles.header}>
      <div className={styles.icon}>
        <Link to="/"><img src={iconBack} alt="icone de retorno" /></Link>
      </div>
      <div className={styles.infoLogin}>
          <h2>Login</h2>
        </div>
        <div className={styles.none}></div>
      </header>
      <form className="formulario" onSubmit={onSubmit}>
        <div className={styles.form}>
        <input 
          value={userLogin.usuario}
          onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
          id="usuario" 
          type="email" 
          placeholder="E-mail" 
          name="usuario"
        />
        <input 
          value={userLogin.senha} 
          onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)}
          id="senha" 
          placeholder="Senha" 
          name="senha" 
          type="password"
        />
        <div>
          <button type="submit">{isLoading ? "Aguarde" : "Entrar"}</button>
        </div>
        </div>
      </form>
      <p>
        <Link to="/usuario">
          Cadastre-se
        </Link>
      </p>
    </div>
  )
}



