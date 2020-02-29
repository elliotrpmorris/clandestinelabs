import React from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import Service from './Service';

export const Title = styled.h1`      
    color: #20232a;  
    display: flex;
    justify-content: center;
    font-size: 3.5rem;
    margin-bottom: 0;
    @media (min-width: 414px) {
      font-size: 4rem;
    }
`;

export const SubTitle = styled.p`      
    color: #20232a;  
    display: flex;
    justify-content: center;
    font-size: 1rem;
    @media (min-width: 414px) {
      font-size: 1.1rem;
    }
`;

function Services() {
  return (
   <section id="page-wrap">
      <Grid>
        <Row>
          <Col xs={12}>
          <Title>Services</Title>
          </Col>
          <Col xs={12}>
          <SubTitle>Here's what we have to offer.</SubTitle>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
          <Service
              title="Website Development"
              description="We offer bespoke website development, we can work from provided templates or create our own depending
              on your requirements. whether you require just static pages or customisable content using a (CMS) we will help to
              consult on the best solution for you. All websites will be mobile friendly!"
            />
          </Col>
          <Col xs={12} md={4}>
          <Service
              title="Website hosting"
              description="Now you have your shiny new website it needs a home. We can provide this home and are happy to provide
              further updates to your site as agreed in the contract that will be discussed."
            />
          </Col>
          <Col xs={12} md={4}>
          <Service
              title="Web App development"
              description="Need more than just a website? We can provide full web applications to help your business grow. Contact us 
              for more information on how!"
            />
          </Col>
        </Row>
      </Grid>
   </section>
  );
}

export default Services;
