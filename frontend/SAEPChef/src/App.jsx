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

  async function entrar() {
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

      const data = await response.json()

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
        <header class="cabecalho">
          <section class="usuario-cabecalho">
            <img id="fotoUsuario"
              src="/saepChef.jpg"
              alt="Foto do usuário"/>
              <div>
                <strong id="nomeUsuario">@SAEPChef</strong>
                <button id="botaoPerfil"
                  class="botao botao-escuro">
                  Ver Perfil
                </button>
              </div>
          </section>
          <a class="marca" href="#">SAEPChef</a>
          <button id="botaoLogin" onClick={() => setLoginAberto(true)}
            class="botao botao-escuro">
            Login
          </button>
        </header>
        <main class="conteudo">
          <section id="secaoMural">
            <div id="muralReceitas" class="mural"></div>
            <form id="formBusca" class="busca">
              <input id="campoBusca"
                type="search"
                placeholder="Digite o nome do chef... ex: @chef1"/>
                <button type="submit" aria-label="Buscar chef">
                  <img src="/lupa.svg" alt=""/>
                </button>
            </form>
            <p id="mensagemBusca" class="mensagem-busca"></p>
          </section>
        </main>
        <aside id="painelPerfil" class="painel-perfil">
          <button id="fecharPerfil" class="botao-icone">
            <img src="/close.svg" alt="Fechar"/>
          </button>
          <img id="fotoPerfil" class="foto-perfil"
            alt="Foto do chef"/>
            <h2 id="nomePerfil"></h2>
            <div class="numeros-perfil">
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
              class="suas-receitas">
              Suas receitas
            </button>
        </aside>
        <footer class="rodape">

          <nav class="redes" aria-label="Redes sociais">
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
        {loginAberto && (<div id="modalLogin" class="modal">
          <div class="modal-conteudo">
            <button id="fecharLogin" class="botao-icone" onClick={() => {setLoginAberto(false)}}>
              <img src="/close.svg"
                alt="Fechar login" class="img-modal"/>
            </button>
            <h2>Login</h2>
            <form id="formLogin" novalidate>
              <div class="campo">
                <label for="email">E-mail</label>
                <input id="email" type="email"
                  placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <small id="erroEmail" class="erro"></small>
              </div>
              <div class="campo">
                <label for="senha">Senha</label>
                <input id="senha" type="password"
                  placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                  <small id="erroSenha" class="erro"></small>
              </div>
              <p id="erroLogin" class="erro-login"></p>
              <div class="acoes-login">
                <button id="cancelarLogin"
                  class="botao botao-contorno"
                  type="button" onClick={() => {setLoginAberto(false)}}>Cancelar</button>
                <button class="botao botao-escuro"
                  type="submit" onSubmit={(e) => {
                    e.preventDefault();
                    entrar();
                  }}>Login</button>
              </div>
            </form>
          </div>
        </div>)}
      </div>
      )
  }

      export default App
