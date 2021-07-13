import React, { useRef, useContext, useEffect } from 'react';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';

import { Container, Forms, Body } from './style';
import * as Yup from 'yup';
import getValidationErrors from '../../../utils/getValidationsErrors';
import { AuthContext } from '../../../contexts/UserContexts';
import { useHistory } from 'react-router-dom';
import { getToken } from '../../../services/auth';

function SignIn() {
  const formRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (getToken() != null) {
      history.push('/dashboard');
    }
  }, [history]);

  const { signIn: login } = useContext(AuthContext);
  const handleSubmit = async (data) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        login: Yup.string().required('login obrigatório'),
        senha: Yup.string().required('Senha obrigatória'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      formRef.current?.setErrors({});
      await login(data);
      history.push('/dashboard');
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  };

  return (
    <Container>
      {' '}
      <span>aaaa</span>
      <Body>
        <h1>ENTRAR</h1>
        <span>O seu passaporte para o futuro.</span>
        <Forms ref={formRef} onSubmit={handleSubmit}>
          <span>E-mail</span>
          <Input name="login" placeholder="seuemail@email.com" />
          <span>Senha</span>
          <Input
            name="senha"
            placeholder="Enter your password"
            type="password"
          />
          <Button>LOGIN</Button>
        </Forms>
        <div>
          Não possui uma conta ? <a href="/register">Registrar-se</a>
        </div>
      </Body>
    </Container>
  );
}

export default SignIn;
