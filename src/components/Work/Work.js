import React from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import Project from './Project';

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
    @media (min-width: 415px) {
      font-size: 1.1rem;
    }
`;

function About() {
  return (
    <section id="page-wrap">
       <Grid>
        <Row>
          <Col xs={12}>
            <Title>Projects</Title>
          </Col>
          <Col xs={12}>
            <SubTitle>Here are some projects we have done.</SubTitle>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Project
                title="Leeds Rhinos"
                description="On this Elliot worked on the front end templates, which consisted of the styling and layout. He was tasked with
                creating the site based on provided design templates."
                link="https://therhinos.co.uk"
              />
          </Col>
          <Col xs={12} md={6}>
            <Project
                title="Asda Money"
                description="Elliot created the current home page built from a given design template. which is fully mobile responsive."
                link="https://money.asda.com"
              />
          </Col>
          <Col xs={12} md={6}>
            <Project
                title="Lesson's for less"
                description="This site allows users to compare driving lesson prices. Elliot was involved in designing of the website and
                the creation of templates."
                link="https://lessons4less.co.uk"
              />
          </Col>
        </Row>
      </Grid>
    </section>
  );
}

export default About;
