import React from 'react';
import Card from '../Common/Card';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';

function How() {
  return (
    <section>
      <Grid>
        <Row>
          <Col xs={12} lg={8}>
            <Card
              title="How it goes down"
              description="We aim to provide top quality support and advice during the process, 
              we are always happy to consult on what we see for the site to contain."
            />
          </Col>
        </Row>
      </Grid>
    </section>
  );
}

export default How;