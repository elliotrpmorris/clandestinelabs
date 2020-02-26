import React from 'react';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';

class Contact extends React.Component {

  render() {
    return (
      <section>
        <Grid>
          <Row>
            <Col xs="8">
            <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
              <p>
                <label>
                  Your Name: <input type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  Your Email: <input type="email" name="email" />
                </label>
              </p>
              <p>
                <label>
                  Message: <textarea name="message" />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default Contact;
