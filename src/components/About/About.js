import React from 'react';
import What from './What';
import Who from './Who';
import How from './How';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';

export const Title = styled.h1`      
    color: #20232a;  
    display: flex;
    justify-content: center;
    font-size: 3.5rem;
    @media (min-width: 414px) {
      font-size: 4rem;
    }
`;

function About() {
  return (
    <section>
       <Grid>
        <Row>
          <Col xs={12}>
          <Title>About Us</Title>
          </Col>
        </Row>
      </Grid>
      <Who/>
      <br/>
      <What/> 
      <br/>
      <How/>
      <br/>
    </section>
  );
}

export default About;
