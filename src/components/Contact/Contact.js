import React from 'react';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import styled from 'styled-components';

export const Box = styled.input`      
    color: #323741;  
    font-size: 1.1rem;
`;

export const TextBox = styled.textarea`      
    color: #323741;  
    font-size: 1.1rem;
`;

export const Btn = styled.button`      
    color: #323741;  
    font-size: 1.1rem;
`;

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then()
      .catch(error => alert(error));
    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <section>
        <Grid>
          <Row>
            <Col xs={8}>
            <form name="contact" onSubmit={this.handleSubmit} action="/thank-you" >
            <input type="hidden" name="form-name" value="contact" />
              <p>
                <label>
                  Your Name: <Box type="text" name="name" value={name} onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Your Email: <Box type="email" name="email" value={email} onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Message: <TextBox name="message" value={message} onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <Btn type="submit">Send</Btn>
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
