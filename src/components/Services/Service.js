import React from 'react';
import styled from 'styled-components';
import {Col, Row} from 'react-styled-flexboxgrid';
import { faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Title = styled.h2`      
    color: #323741;  
    text-align: center;
    font-size: 1.75rem;
    margin: 0;
`;

export const Description = styled.p`      
    color: #323741;  
    font-size: 1.1rem;
`;

export const CardContainer = styled.div`   
    border-radius: 0.75rem;
    box-shadow:  0 22px 70px 4px rgba(215,211,203,0.56), 0 0 0 1px rgba(215,211,203, 0.3);
    background-color: #d7d3cb;
    cursor: pointer;
    padding: 1.25rem;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: #323741;
  margin: 0 .5rem;
  font-size: 1.75rem;
  
`;

const Card = ({ title, description }) => (
    <CardContainer>
      <Row middle="md">
        <Col xs={12} md={3}>
          <Title>{title}</Title>
          <Icon icon={faGlobe}/>
        </Col>
        <Col xs={12} md={9}>
          <Description>{description}</Description>
        </Col>
      </Row>
    </CardContainer>
  )

export default Card 