import React from 'react'
import styles from './PainelMovimentacao.module.css'

import iconProfile from '../../../assets/icons/iconProfile.svg'
import iconEntrega from '../../../assets/icons/iconEntrega.svg'
import iconGorjeta from '../../../assets/icons/iconGorjeta.svg'
import iconDiaria from '../../../assets/icons/iconDiaria.svg'
import iconManutencao from '../../../assets/icons/iconManutencao.svg'
import iconAbastecimento from '../../../assets/icons/iconAbastecimento.svg'
import iconAlimentacao from '../../../assets/icons/iconAlimentacao.svg'
import iconMais from '../../../assets/icons/IconMais.svg'
import iconMenos from '../../../assets/icons/iconMenos.svg'
import { Link } from 'react-router-dom'

export function PainelMovimentacao() {
  return (
    <div className={styles.content}>
      <header className={styles.movHeader}>
        <div className={styles.icon}>
          <Link to={`/meta`}>
            <img src={iconProfile} alt="Voltar" />
          </Link>
        </div>
        <div className={styles.saudacoes}>
          <p>E aí {`Will`},</p>
          <p>Pronto para ameta de hoje?</p>
        </div>
        <div className={styles.sair}>
          <Link to={`/`}>
            <p>Sair</p>
          </Link>
        </div>
      </header>
      <main className={styles.movMain}>
        <div className={styles.div_menu}>
          <Link to={`/cadastro`}>
            <div className={styles.div_menu_item}>
              <img src={iconMais} alt="Entrada" />
              <img src={iconEntrega} alt="" />
              <p>Entrega</p>
            </div>
          </Link>
          <Link to={`/cadastro`}>
            
            <div className={styles.div_menu_item}>
              <img src={iconMais} alt="Entrada" />
              <img src={iconGorjeta} alt="" />
              <p>Gorjeta</p>
            </div>
          </Link>
        </div>
        <div className={styles.div_menu}>
          <Link to={`/cadastro`}>
            <div className={styles.div_menu_item}>
              <img src={iconMais} alt="Entrada" />
              <img src={iconDiaria} alt="" />
              <p>Diária</p>
            </div>
          </Link>
          <Link to={`/cadastro`}>
            <div className={styles.div_menu_item}>
              <img src={iconMenos} alt="Entrada" />
              <img src={iconManutencao} alt="" />
              <p>Manutenção</p>
            </div>
          </Link>
        </div>
        <div className={styles.div_menu}>
          <Link to={`/cadastro`}>
            <div className={styles.div_menu_item}>
              <img src={iconMenos} alt="Entrada" />
              <img src={iconAbastecimento} alt="" />
              <p>Abastecimento</p>
            </div>
          </Link>
          <Link to={`/cadastro`}>
            <div className={styles.div_menu_item}>
              <img src={iconMenos} alt="Entrada" />
              <img src={iconAlimentacao} alt="" />
              <p>Alimentação</p>
            </div>
          </Link>
        </div>
        <div className={styles.div_btn}>
          <Link to={`/cadastro`}>
            <button>Km percorrido</button>
          </Link>
          <Link to="/lista">
            <button>Extrato</button>
          </Link>
          <Link to="/resultado">
            <button>Resultados</button>
          </Link>
        </div>
      </main>
    </div>
  )
}
