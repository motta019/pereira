import { useState } from 'react'
import './App.css'
import logo from './assets/img/meta.png'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <section className="foto"></section>
        <section>
        
        <div className="nome">
          <h2>Fazer login</h2>
        </div>

        <div className="login">
          <p>Login</p>
        </div>
        <input className='usuario' type="text" placeholder='Digite seu login...'/>   

        <div className="password">
          <p>Senha</p>
        </div> 
        <input className='senha' type="password" placeholder='Digite sua senha...'/>   

        <button>ENTRAR</button>
        <a href="">Esqueci minha senha</a>

        </section>
      </main>
    </>
  )
}

