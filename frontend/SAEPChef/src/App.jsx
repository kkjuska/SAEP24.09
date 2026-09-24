import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [loginAberto, setLoginAberto] = useState(false);

  window.abrirLogin = () => {
    setLoginAberto(true);
  }
  const [erro, setErro] = useState('')

  async function entrar(e) {
    console.log('CHAMOU A FUNÇÃO ENTRAR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    e.preventDefault()
    setErro('')

    try {
      const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: senha
        })
      })

      console.log(response.body)

      const data = await response.json()
      console.log(data)

      if (!response.ok) {
        throw new Error('Email ou senha invalidos!')
      }

      localStorage.setItem('user', JSON.stringify(data.user))

      navigate('/')
    } catch (error) {
      setErro(error.message)
    }
  }

  return (
      <div> 
        <header className="cabecalho">
          <section className="usuario-cabecalho">
            <img id="fotoUsuario"
              src="/saepChef.jpg"
              alt="Foto do usuário"/>
              <div>
                <strong id="nomeUsuario">@SAEPChef</strong>
                <button id="botaoPerfil"
                  className="botao botao-escuro">
                  Ver Perfil
                </button>
              </div>
          </section>
          <a className="marca" href="#">SAEPChef</a>
          <button id="botaoLogin" onClick={() => setLoginAberto(true)}
            className="botao botao-escuro">
            Login
          </button>
        </header>
        <main className="conteudo">
          <section id="secaoMural">
            <div id="muralReceitas" className="mural"></div>
            <form id="formBusca" className="busca">
              <input id="campoBusca"
                type="search"
                placeholder="Digite o nome do chef... ex: @chef1"/>
                <button type="submit" aria-label="Buscar chef">
                  <img src="/lupa.svg" alt=""/>
                </button>
            </form>
            <p id="mensagemBusca" className="mensagem-busca"></p>
          </section>
        </main>
        <aside id="painelPerfil" className="painel-perfil">
          <button id="fecharPerfil" className="botao-icone">
            <img src="/close.svg" alt="Fechar"/>
          </button>
          <img id="fotoPerfil" className="foto-perfil"
            alt="Foto do chef"/>
            <h2 id="nomePerfil"></h2>
            <div className="numeros-perfil">
              <p>
                <strong id="totalFavoritos">0</strong>
                <span>Favoritos</span>
              </p>
              <p>
                <strong id="totalReceitas">0</strong>
                <span>Receitas</span>
              </p>
            </div>
            <button id="botaoSuasReceitas"
              className="suas-receitas">
              Suas receitas
            </button>
        </aside>
        <footer className="rodape">

          <nav className="redes" aria-label="Redes sociais">
            <a href="#" aria-label="Instagram">
              <img src="/instagram.svg" alt=""/>
            </a>
            <a href="#" aria-label="TikTok">
              <img src="/tiktok.svg" alt=""/>
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src="/linkedin.svg" alt=""/>
            </a>
            <a href="#" aria-label="YouTube">
              <img src="/youtube.svg" alt=""/>
            </a>
          </nav>
          <span>Copyright 2026-2027</span>
        </footer>
        {loginAberto && (<div id="modalLogin" className="modal">
          <div className="modal-conteudo">
            <button id="fecharLogin" className="botao-icone" onClick={() => {setLoginAberto(false)}}>
              <img src="/close.svg"
                alt="Fechar login" className="img-modal"/>
            </button>
            <h2>Login</h2>
            <form id="formLogin" noValidate onSubmit={entrar}>
              <div className="campo">
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email"
                  placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <small id="erroEmail" className="erro"></small>
              </div>
              <div className="campo">
                <label htmlFor="senha">Senha</label>
                <input id="senha" type="password"
                  placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                  <small id="erroSenha" className="erro"></small>
              </div>
              <p id="erroLogin" className="erro-login"></p>
              <div className="acoes-login">
                <button id="cancelarLogin"
                  className="botao botao-contorno"
                  type="button" onClick={() => {setLoginAberto(false)}}>Cancelar</button>
                <button className="botao botao-escuro"
                  type="submit" >Login</button>
              </div>
            </form>
          </div>
        </div>)}
      </div>
      )
  }

      export default App
