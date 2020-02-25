import React from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
// import { faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons";
// import { faGlobe } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Copy = styled.p`      
    color: #323741;  
    text-align: center;
    font-size: .75rem;
`;

export const Link = styled.a`      
    color: #323741;  
    text-align: center;
    font-size: .75rem;
    text-deceration: none;
`;

export const Spacer = styled.span`      
margin: 0 .25rem;
`;

const Footer = ({ title, description }) => (
    <Grid>
      <Row middle="md">
        <Col xs={12}>
          <Copy>
              Socal links: <Link href="https://elliotmorris.dev">Personal site</Link> <Spacer>|</Spacer>
              <Link href="https://github.com/elliotrpmorris">GitHub</Link> <Spacer>|</Spacer>
              <Link href="https://www.linkedin.com/in/elliotrpmorris/">LinkedIn</Link>
          </Copy>
        </Col>
      </Row>
    </Grid>
  )

export default Footer 