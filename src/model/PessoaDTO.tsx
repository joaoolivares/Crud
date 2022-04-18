export interface PessoaDTO {
  pessoas: {
    cpf: string,
    dataNascimento: string,
    email: string,
    idPessoa?: number,
    nome: string
  }[]
}

export interface ItemPessoaDTO {
  cpf: string,
  dataNascimento: string,
  email: string,
  idPessoa?: number,
  nome: string
}