import React from 'react';
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

function ThankYou() {
  return (
    <section>
       <Grid>
        <Row>
          <Col xs={12}>
          <Title>Thanks!</Title>
          </Col>
        </Row>
      </Grid>
    </section>
  );
}

export default ThankYou;
