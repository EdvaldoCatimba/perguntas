import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <Container>
      <Title>🎉 Bem-vindo ao Jogo de Perguntas! 🎉</Title>
      <Description>
        Teste seus conhecimentos e se divirta com perguntas nas mais variadas categorias.
      </Description>
      <Buttons>
        <StyledLink to="/iniciar">🎮 Iniciar Jogo</StyledLink>
        <StyledLink to="/sobre">ℹ️ Saber Mais</StyledLink>
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 20px;
`;

const Description = styled.p`
 margin-top: 70px;
  font-size: 1.2rem;
  max-width: 600px;
  color: #fff;
  margin-bottom: 70px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  background-color: #0984e3;
  color: white;
  padding: 12px 24px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #74b9ff;
  }
`;
