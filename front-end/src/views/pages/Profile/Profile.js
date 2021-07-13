import React, { useState, useEffect, useContext, useRef } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { AuthContext } from "../../../contexts/UserContexts";
import { getId } from "../../../services/auth";
import * as Yup from "yup";

import { Container, Forms } from "./style";
import getValidationErrors from "../../../utils/getValidationsErrors";

function Perfil() {
  const [user, setUser] = useState({});
  const formRef = useRef(null);

  const { loadingUser, updateUser } = useContext(AuthContext);
  const id = getId();
  
  

  useEffect( () => {
    const loadingClickedUser = async ()=>{
        setUser(await loadingUser())
    }
   loadingClickedUser()
  }, [loadingUser]);

  const handleSubmit = async (data) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        nome: Yup.string().required("Nome obrigatório"),
        nivel: Yup.number().required("Nivel é obrigatório"),
        acesso: Yup.number().required("Acesso é obrigatorio"),
        senha: Yup.string(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      formRef.current?.setErrors({});

      if (data.senha === "") delete data.senha;
      await updateUser(data, id);
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  };

  return (
    <Container>
      <h1>Meu Perfil</h1>
      <Forms onSubmit={handleSubmit} initialData={{ ...user, senha: "" }}>
        <Input name="nome" placeholder="Nome completo" />
        <Input name="nivel" placeholder="Nivel" type="number" />
        <Input name="acesso" placeholder="Nivel" type="number" />
        <Input name="senha" placeholder="Senha" type="password" />
        <Button>Salvar</Button>
      </Forms>
    </Container>
  );
}

export default Perfil;