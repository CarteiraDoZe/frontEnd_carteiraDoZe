import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from './components/estaticos/header/Header';
import { Footer } from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import CadastroCarteira from './components/carteira/CadastroCarteira';
import Resultado from './paginas/resultado/Resultado';
import CadastroMovimentacao from './components/movimentacao/cadastroMovimentacao/cadastroEntrega/CadastroEntrega';
import DeletarMovimentacao from './components/movimentacao/deletarMovimentacao/DeletarMovimentacao';
import PainelMovimentacao from './components/movimentacao/painelMovimentacao/PainelMovimentacao';
import ListaMovimentacao from './components/movimentacao/listarMovimentacao/ListaMovimentacao';

import styles from './App.module.css';
import { Provider } from 'react-redux';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.teste}>
    {/* <Provider store={Storage}> */}
    <ToastContainer />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/login' element={ <Login/> } />
          <Route path='/usuario' element={ <CadastroUsuario/> } />
          <Route path='/meta' element={ <CadastroCarteira/> } />
          <Route path='/resultado' element={ <Resultado /> } />
          <Route path='/painel' element={ <PainelMovimentacao /> } />
          <Route path='/cadastro' element={ <CadastroMovimentacao /> } />
          <Route path='/cadastro/:id' element={ <CadastroMovimentacao /> } />
          <Route path='/deletar' element={ <DeletarMovimentacao /> } />
          <Route path='/lista' element={ <ListaMovimentacao /> } />
        </Routes>
        <Footer />
      </Router>
    {/* // </Provider> */}
    </div>
  )
}
