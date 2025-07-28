import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './Templates/Welcome';
import Tela from './Templates/Tela';
import Sobre from './Templates/Sobre';
import Consequencia from './Templates/Consequecia';
export default function () {
  return (
    <HomeStyle>
        <Header>
            <span>Jogo de Perguntas</span>
        </Header>
        <Main>
            <Router>
                <Routes>
                    <Route path="/" element={<Welcome/>} />
                    <Route path="/iniciar" element={<Tela/>} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/consequencia" element={<Consequencia />} />
                </Routes>
            </Router>
        </Main>
    </HomeStyle>
  )

}

const HomeStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const Header = styled.header`
    background-color: #444343;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        text-align: center;
        font-size: 30px;
        font-weight: bolder;
    }
`
const Main = styled.main`
    width: 100%;
`

