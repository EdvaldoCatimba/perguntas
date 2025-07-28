import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import perguntas from '../../../z-perguntas_jogo_quente.json'

const perguntasMock = perguntas;

export default function Jogo() {
  const [perguntaAtual, setPerguntaAtual] = useState(Math.floor(Math.random() * 120) + 1);
  const [tempoRestante, setTempoRestante] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTempoRestante((prev) => {
        if (prev <= 1) {
          clearInterval(intervalo);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, [perguntaAtual]);

  const proximaPergunta = () => {
    if (perguntaAtual < perguntasMock.length - 1) {
      setPerguntaAtual(Math.floor(Math.random() * 120) + 1);
      setTempoRestante(30);
    } 
  };
  const consequencia = () => {
    navigate('/consequencia')
  };

  const pergunta = perguntasMock[perguntaAtual];

  return (
    <Container>
      <Categoria>{pergunta.categoria}</Categoria>
      <Cronometro>⏱ {tempoRestante}s</Cronometro>
      <Pergunta>{pergunta.pergunta}</Pergunta>

      <Botoes>
        <Botao onClick={() => proximaPergunta()}>Próxima</Botao>
        <Botao onClick={consequencia}>Consequência</Botao>
        <BotaoDesistir onClick={() => navigate('/')}>Desistir</BotaoDesistir>
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
