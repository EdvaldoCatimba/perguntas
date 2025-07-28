import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import perguntas from '../../../z-consequencias_jogo_quente copy.json'

const perguntasMock = perguntas;

export default function Consequencia() {
  const [perguntaAtual, setPerguntaAtual] = useState(Math.floor(Math.random() * 120) + 1);
  const navigate = useNavigate();


  const proximaPergunta = () => {
    navigate('/iniciar');
  };
  const desistir = () => {
    navigate('/');
  };

  const pergunta = perguntasMock[perguntaAtual];

  return (
    <Container>
      <Categoria>{pergunta.categoria}</Categoria>
      <Pergunta>{pergunta.pergunta}</Pergunta>

      <Botoes>
        <Botao onClick={() => proximaPergunta()}>Feito</Botao>
        <BotaoDesistir onClick={() => desistir()}>Desistir</BotaoDesistir>
      </Botoes>
    </Container>
  );
}

const Container = styled.div`
  padding: 50px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Categoria = styled.h2`
  font-size: 1.2rem;
  color: #d63031;
  margin-bottom: 10px;
`;

const Cronometro = styled.div`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 20px;
`;

const Pergunta = styled.h1`
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin-bottom: 40px;
  max-width: 700px;
`;

const Botoes = styled.div`
  display: flex;
  gap: 20px;
`;

const Botao = styled.button`
  padding: 10px 20px;
  background: #00b894;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background: #55efc4;
  }
`;

const BotaoDesistir = styled(Botao)`
  background: #d63031;
  &:hover {
    background: #ff7675;
  }
`;
