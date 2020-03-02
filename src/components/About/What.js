import React from 'react';
import Card from '../Common/Card';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';

function What() {
  return (
    <section>
      <Grid>
        <Row>
          <Col xs={12} lg={8}>
            <Card
              title="What is it?"
              description="From simple static websites to full blown dynamic web applications. 
              Whether you require a simple 4 page web site consisting of a simple contact form and text to a fully fledge booking application.
              We can provide the expertise to get the job done."
            />
          </Col>
        </Row>
      </Grid>
    </section>
  );
}

export default What;