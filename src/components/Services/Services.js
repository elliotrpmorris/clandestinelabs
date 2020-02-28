import React from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import Service from './Service';

export const Title = styled.h1`      
    color: #20232a;  
    display: flex;
    justify-content: center;
    font-size: 3.5rem;
    @media (min-width: 414px) {
      font-size: 4rem;
    }
`;

function Services() {
  return (
   <section>
      <Grid>
        <Row>
          <Col xs={12}>
          <Title>Services</Title>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
          <Service
              title="What is it?"
              description="From simple static websites to full blown dynamic web applications. 
              Wether you require a simple 4 page web site consiting of a simple contact form and text to a fully fledge booking application.
              We can provide the expertise to get the job done."
            />
          </Col>
          <Col xs={12} md={4}>
          <Service
              title="What is it?"
              description="From simple static websites to full blown dynamic web applications. 
              Wether you require a simple 4 page web site consiting of a simple contact form and text to a fully fledge booking application.
              We can provide the expertise to get the job done."
            />
          </Col>
          <Col xs={12} md={4}>
          <Service
              title="What is it?"
              description="From simple static websites to full blown dynamic web applications. 
              Wether you require a simple 4 page web site consiting of a simple contact form and text to a fully fledge booking application.
              We can provide the expertise to get the job done."
            />
          </Col>
        </Row>
      </Grid>
   </section>
  );
}

export default Services;
