import React from 'react';
import Card from '../Common/Card';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';

function Who() {
  return (
    <section>
      <Grid>
        <Row>
          <Col xs={12} lg={8}>
            <Card
              title="Who are we"
              description="We aim to offer high quality web development services. 
              To help take off your online presence."
            />
          </Col>
        </Row>
      </Grid>
    </section>
  );
}

export default Who;