import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { TokenState } from '../../store/tokens/TokensReducer';
import { useSelector } from 'react-redux';
import { buscaId, post, put } from '../../service/Service';
import { toast } from 'react-toastify';
import { Usuario } from '../../models/Usuario';
import { Carteira } from '../../models/Carteira';

import iconBack from '../../assets/icons/iconBack.svg'
import styles from './CadastroCarteira.module.css'

export function CadastroCarteira() {
let navigate = useNavigate();

const { id } = useParams<{ id: string }>();

const token = useSelector<TokenState, TokenState["token"]>(
(state) => state.token
);

const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);

const [carteira, setCarteira] = useState<Carteira>({
  id: 0,
  meta: 0,
  diaria: 0,
  valorEntrega: 0,
  usuario: null
});

const [usuario, setUsuario] = useState<Usuario>({
  id: +userId,
  nome: "",
  usuario: "",
  dataNasc: "",
  senha: ""
});

// async function findById(id: string) {
//   await buscaId(`/carteira/${id}`, setCarteira, {
//     headers: {
//       Authorization: token,
//     },
//   });
// }

// useEffect(() => {
//   if(id !== undefined) {
//     findById(id);
//   }
// }, [id]);

function updatedCarteira(e: ChangeEvent<HTMLInputElement>) {
  setCarteira({
    ...carteira,
    [e.target.name]: e.target.value,
  });
}

useEffect(() => {
  setCarteira({
    ...carteira,
    usuario: usuario,
  });
}, [usuario]);

async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
  e.preventDefault();

  if (id !== undefined) {
    try {
      await put(`/carteira`, carteira, setCarteira, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Meta atualizada com sucesso", {
        theme: "colored",
      });
    }
    catch {
      toast.error("Meta NÃO atualizada", {
        theme: "colored",
      });
    }
  }
  else {
    try {
      await post(`/carteira`, carteira, setCarteira, {
        headers: {
          Authorization: token,
        },
      });
      console.log('CADASTREI UMA CARTEIRA!')
      console.log(carteira.id)
      toast.success("Meta cadastrada com sucesso", {
        theme: "colored",
      });
    }
    catch {
      toast.error("Meta NÃO cadastrada", {
        theme: "colored",
      });
    }
  }
  // back()  
  console.log(`ESSE É O ID: ${id}`)
  console.log(`ESSE É O JSON CARTEIRA: ${carteira.id}`)
  console.log(carteira)
  console.log(typeof carteira.id)
  console.log(carteira.id)
}
function back() {
  navigate("/painel");
}

  return (
    <div className={styles.content}>
    <header className={styles.header}>
      <div className={styles.icon}>
      <Link to="/painel"><img src={iconBack} alt="icone de retorno" /></Link>
      </div>
      <div className={styles.saudacoes}>
        <h2>E aí Will,</h2>
        <h2>Bora bater essa meta?</h2>
      </div>
      <div className={styles.none}><></></div>
    </header>
    <form onSubmit={onSubmit}>
      <div className={styles.form}>
      <input 
        value={carteira.meta } 
        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCarteira(e)}
        id="meta" 
        placeholder="Digite o valor da sua meta" 
        name="meta"
    />
      <input id="diaria" placeholder="Digite o valor da sua diária" name="diaria"
      value={carteira.diaria} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCarteira(e)}/>
      <input id="valorEntrega" placeholder="Digite o valor da sua entrega" name="valorEntrega"
      value={carteira.valorEntrega} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCarteira(e)}/>
      <div>
        <button type="submit">Bora!</button>
      </div>
      </div>
    </form>
  </div>
  )
}