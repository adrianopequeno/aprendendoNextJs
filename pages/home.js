import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '~/hocs/withAnalytics';

/** Criando os estilos das páginas */
const Div = styled.div `
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const FlexContainer = styled.div `
  display: flex;
  width: 400px;
  height: 200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #CCC;
  border-radius: 10px;
`;
const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => (
  <Div>
    <FlexContainer>
      <Head>
        <title>Home</title>
      </Head>
      <img src="/static/projectalogo.png" alt="" width="200"/>
      <Title>Hello World!</Title>

      <Link href="/users">
        <a>Página de usuários.</a>
      </Link>
    </FlexContainer>
  </Div>
  
);

export default withAnalytics()(Home);