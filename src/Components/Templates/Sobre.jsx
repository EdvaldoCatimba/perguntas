import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img from '../../assets/Desk.jpeg'

export default function Sobre() {
  return (
    <Container>
      <Title>ℹ️ Sobre o Jogo</Title>
      <Text>
        Este jogo foi criado para casais ou amigos se conhecerem melhor de forma divertida e ousada.  
        São 120 perguntas divididas em 4 níveis:  
        <strong> Simples, Médias, Picantes e Extra Picantes</strong>.  
        A cada pergunta, o jogador pode escolher responder ou recusar...  
        Mas cuidado: quem não responde, sofre uma consequência real definida no início do jogo! 😈🔥
      </Text>

      <List>
        <li>🎯 30 Perguntas Simples – pra aquecer</li>
        <li>🔥 30 Perguntas Médias – já começa a esquentar</li>
        <li>💋 30 Perguntas Picantes – pra desafiar</li>
        <li>😈 30 Perguntas Extra Picantes – só os corajosos!</li>
      </List>
        <nav>
            <abbr title="Autor Edvaldo Catimba"> 
                <a href="https://web.facebook.com/?locale=pt_PT&_rdc=1&_rdr#" target='_blank'>
                    <img src={img} className='img' alt="autor Edvaldo Catimba" />
                </a>
            </abbr>
            <p className='p'>
                Este jogo foi criado por Edvaldo Catimba, 
                um desenvolvedor apaixonado por tecnologia, 
                criatividade e desafios. Inspirado pela vontade 
                de aproximar casais e tornar momentos a dois ainda 
                mais divertidos, Edvaldo criou este jogo com perguntas
                envolventes e ousadas. Seu objetivo é provocar risadas,
                reflexões e, claro, fortalecer a conexão entre os jogadores.
            </p>
        </nav>
      <Voltar to="/">⬅️ Voltar ao Início</Voltar>
    </Container>
  );

}

const Container = styled.div`
  padding: 50px;
  text-align: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  nav{
    display: flex;
    flex-direction: column;
  }
  .img{
    width: 300px;
    border-radius: 50%;

  }
  .p{
    width: 500px;
    text-align: justify;
    text-indent: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: #fff;
  margin-bottom: 20px;
  margin-bottom: 20px;
 
`;

const Text = styled.p`
  font-size: 1.1rem;
  color: #fff;
  max-width: 600px;
  margin-bottom: 30px;
   text-align: justify;
    text-indent: 30px;
   strong{
    color: red;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 40px;
   text-align: justify;
    text-indent: 20px;
  li {
    font-size: 1rem;
    color: #636e72;
    margin: 10px 0;
  }
`;

const Voltar = styled(Link)`
  text-decoration: none;
  background-color: #d63031;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff7675;
  }
`;
