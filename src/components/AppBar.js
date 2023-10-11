import React from 'react'
import styled from 'styled-components';

const Header = styled.header`
  max.width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin-bottom:1rem;
`;

const AppBar = () => {
  return (
    <Header>
      <H1>i Gallery</H1>
      <p>The internet’s source for visuals.</p>
      <p>Powered by creators everywhere.</p>

    </Header>
  )
}

export default AppBar;