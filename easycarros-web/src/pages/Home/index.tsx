import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Main, Content } from './styles';

import logo from '../../assets/logo.png';

const Repository: React.FC = () => {
  return (
    <Main>
      <Content>
        <img src={logo} alt="Easy Carros" />
        <h1>Bem-vindo ao teste front end!</h1>
        <p>
          Este teste tem como objetivo avaliar e desafiar você. Não é
          obrigatório realiza-lo completamente, queremos apenas reconhecer seu
          esforço e potencial para aprender, se adaptar e tomar decisões.
        </p>
        <Link to="Dashboard">Entrar</Link>
      </Content>
    </Main>
  );
};

export default Repository;
