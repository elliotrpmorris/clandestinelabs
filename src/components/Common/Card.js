import React from 'react';
import styled from 'styled-components';
import {Col, Row} from 'react-styled-flexboxgrid';

export const Title = styled.h2`      
    color: #323741;  
    text-align: center;
    font-size: 1.5rem;
    margin: 0;
`;

export const Description = styled.h2`      
    color: #323741;  
    font-size: 1rem;
    text-align: center;
`;

export const CardContainer = styled.div`   
    border-radius: 0.75rem;
    box-shadow:  0 22px 70px 4px rgba(215,211,203,0.56), 0 0 0 1px rgba(215,211,203, 0.3);
    background-color: #d7d3cb;
    animation: flip-2-hor-bottom-fwd 0.7s cubic-bezier(0.455, 0.030, 0.515, 0.955) reverse both;
    cursor: pointer;

    @keyframes flip-2-hor-bottom-fwd {
      0% {
        -webkit-transform: translateY(0) translateZ(0) rotateX(0);
                transform: translateY(0) translateZ(0) rotateX(0);
        -webkit-transform-origin: 50% 100%;
                transform-origin: 50% 100%;
      }
      100% {
        -webkit-transform: translateY(100%) translateZ(160px) rotateX(180deg);
                transform: translateY(100%) translateZ(160px) rotateX(180deg);
        -webkit-transform-origin: 50% 0%;
                transform-origin: 50% 0%;
      }
    }
`;


const Card = ({ title, description }) => (
    <CardContainer>
      <Row middle="md">
        <Col xs={12} md={3}>
          <Title>{title}</Title>
        </Col>
        <Col xs={12} md={9}>
          <Description>{description}</Description>
        </Col>
      </Row>
    </CardContainer>
  )

export default Card 