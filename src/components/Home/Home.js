import React from 'react';
import styled from 'styled-components';
import Who from './Who';

export const Title = styled.h1`      
    color: #20232a;  
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
`;

function Home() {
  return (
    <section>
    <Title>Clandestine Lab's</Title>
    <Who/>
    </section>
  );
}

export default Home;
