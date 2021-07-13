import React from 'react'
import Primarybutton from '../button/primary-button/PrimaryButton'
import './ForgetPass.scss'


const ForgetPass = () => {
    return (
        <div className="forget-wrapper">
        <h2 className="forget--title">Esqueci minha senha</h2>
       
        <form action="" className="forget--form">
          <label htmlFor="email">
            insira seu e-mail
            <input
              type="email"
              name="email"
              id="email"
              placeholder="youraddres@gmail.com"
            />
          </label>
         
          <Primarybutton children="enviar" />
        </form>
        <div className="forget--form__signup">
          <p>
            Já possui uma conta? <a href="home">Entrar</a>
          </p>
        </div>
      </div>
    )
}

export default ForgetPass
