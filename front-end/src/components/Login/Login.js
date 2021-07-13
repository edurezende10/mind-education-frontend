import React from 'react';
import Primarybutton from '../button/primary-button/PrimaryButton'
import './Login.scss'

const Login = () => {
  return (
    <div className="login-wrapper">
      <h2 className="login--title">Entrar</h2>
      <p className="login--subtittle">O seu passaporte para o futuro.</p>
      <form action="" className="login--form">
        <label htmlFor="email">
          e-mail
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youraddres@gmail.com"
          />
        </label>
        <label htmlFor="password">
          senha
          <input type="password" name="password" id="password" />
        </label>
        <Primarybutton children="Login" />
      </form>
      <div className="login--form__signup">
        <p>
          Não possui uma conta? <a href="home">Registrar-se</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
