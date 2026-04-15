import { useState } from 'react'
import './App.css'
import minhaimagem from './assets/tecnologia.jpg'

export default function App() {
  

  return (
    <>
    
      <main>
    <section className="foto"></section>

        <section>
        <h1>Power technology</h1>
        <h2>Fazer login</h2>

        <div className='inst'>
          <p>Instituição</p>
          <input type="inst" placeholder='sua Instituição..'/>
        </div>

        <div className='login'>
          <p>login</p>
        <input type="Login2" placeholder='Digite seu login..' />
        </div>

        <div className='senha'>
          <p>senha</p>
        <input type="Senha2" placeholder='Digite sua senha..' />
        </div>

        <button className='ent'>ENTRAR</button>

        <button className='esq'>Esqueci Minha Senha</button>

      </section>
      </main>
    </>
  )
}


