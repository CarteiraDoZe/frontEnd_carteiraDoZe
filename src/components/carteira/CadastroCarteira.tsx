import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './CadastroCarteira.module.css'
import iconBack from '../../assets/icons/iconBack.svg'
import { useNavigate, useParams } from 'react-router-dom';
import { TokenState } from '../../store/tokens/TokensReducer';
import { useSelector } from 'react-redux';
import { Carteira } from '../../models/Carteira';
import { Usuario } from '../../models/Usuario';
import { buscaId, post, put } from '../../service/Service';
import { toast } from 'react-toastify';

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

useEffect(() => {
  setCarteira({
    ...carteira,
    usuario: usuario,
  });
}, [usuario]);

async function findById(id: string) {
  buscaId(`/carteira/${id}`, setCarteira, {
    headers: {
      Authorization: token,
    },
  });
}

useEffect(() => {
  if (id !== undefined) {
    findById(id);
  }
}, [id]);

function updatedCarteira(e: ChangeEvent<HTMLInputElement>) {
  setCarteira({
    ...carteira,
    [e.target.name]: e.target.value,
  });
}

async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
  e.preventDefault();

  if (id !== undefined) {
    put(`/carteira`, carteira, setCarteira, {
      headers: {
        Authorization: token,
      },
    });
    toast.success("Meta atualizada com sucesso", {
      theme: "colored",
    });
  } else {
    post(`/carteira`, carteira, setCarteira, {
      headers: {
        Authorization: token,
      },
    });
    toast.success("Meta cadastrada com sucesso", {
      theme: "colored",
    });
  }
  back()  
}
function back() {
  navigate("/painel");
}

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
    <form onSubmit={onSubmit}>
      <div className={styles.form}>
      <input id="meta" placeholder="Digite o valor da sua meta" name="meta"
      value={carteira.meta} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCarteira(e)}/>
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