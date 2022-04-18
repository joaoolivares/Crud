import React from 'react';
import { ItemPessoaDTO } from "../model/PessoaDTO";

const Card: React.FC<ItemPessoaDTO> = ({pessoas}) => {
  return (
    <div>
      <p>{pessoas.nome}</p>
    </div>
  );
}

export default Card;
