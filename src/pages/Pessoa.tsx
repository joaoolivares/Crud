import React, { useEffect, useState } from "react";
import api from "../api";
import { PessoaDTO, ItemPessoaDTO } from "../model/PessoaDTO";
import { Formik, Field, Form, FormikHelpers } from 'formik';
import List from "../components/List";

const Pessoa = () => {

  const [listPessoa, setListPessoa] = useState<PessoaDTO['pessoas']>([]);

  const getPessoa = async() => {
    const {data} = await api.get('/pessoa');
    setListPessoa(data);
  }
  
  useEffect(() => {
    getPessoa();
  },[])                           

  return (
    <div className="container content">
      <h1>Pessoa</h1>
      <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          nome: '',
          dataNascimento: '',
          email: '',
          cpf: ''
        }}
        onSubmit={async(
          values: ItemPessoaDTO,
          { setSubmitting }: FormikHelpers<ItemPessoaDTO>
        ) => {
          try {
            await api.post('/pessoa', values);
            await getPessoa();
          } catch (error) {
            console.log(error)
          }
          setSubmitting(false);
        }}
      >
        <Form>
          <div>
            <label htmlFor="nome">Nome</label>
            <Field id="nome" name="nome" placeholder="Digite seu nome" />
          </div>
          <div>
            <label htmlFor="dataNascimento">Data de nascimento</label>
            <Field id="dataNascimento" name="dataNascimento" placeholder="Digite a data de nascimento" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="Digite seu email"
              type="email"
            />
          </div>
          <div>
            <label htmlFor="cpf">Cpf</label>
            <Field id="cpf" name="cpf" placeholder="Digite seu CPF" />
          </div>
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
      <List pessoas={listPessoa} />
    </div>
  )
}

export default Pessoa;