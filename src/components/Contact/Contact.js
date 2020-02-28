import React from 'react';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';
import styled from 'styled-components';

export const ContactBackground = styled.div`
  background-color: #d7d3cb;
  border-radius: 0.7em;
  animation: slit-in-horizontal 0.5s ease-out both;

  @keyframes slit-in-horizontal {
    0% {
      -webkit-transform: translateZ(-800px) rotateX(90deg);
              transform: translateZ(-800px) rotateX(90deg);
      opacity: 0;
    }
    54% {
      -webkit-transform: translateZ(-160px) rotateX(87deg);
              transform: translateZ(-160px) rotateX(87deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateZ(0) rotateX(0);
              transform: translateZ(0) rotateX(0);
    }
  }
`;

export const Box = styled.input`      
  color: #323741;  
  font-size: 1.1rem;
  display: block;
  width: 100%;
  background: 0 0;
  line-height: 1.2;
  padding: 5px 5px 0 5px;
  outline: none;
  border: none;
`;

export const WrapInput = styled.div`
  width: 50%;
  position: relative;
  border-bottom: 1px solid #323741;
  padding-bottom: 10px;
`;

export const Focus = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  &:before{
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    transition: all .4s;
    background: #323741;
  }
`;

export const TextBox = styled.textarea`      
  color: #323741;  
  font-size: 1.1rem;
  min-height: 110px;
  display: block;
  width: 100%;
  background: 0 0;
  line-height: 1.2;
  padding: 5px 5px 0 5px;
  outline: none;
  border: none;
  resize: vertical;
`;

export const Btn = styled.button`      
  color: #fff;  
  font-size: 1.1rem;
  line-height: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 50px;
  border-radius: 27px;
  background: #323741;
  outline: none;
  border: none;
  position: relative;
  z-index: 1;
  transition: all .4s;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
  }
`;

export const FormContainer = styled.form`
  padding: 1.5rem;
`; 

export const Title = styled.h1`
  font-size: 2rem;
  padding: 0;
  margin: .25rem 0;
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
      body: encode({ "form-name": "contact", ...this.state },)
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <section>  
          <Grid>
            <Row center="xs">
              <Col xs={12} md={6}>
                <br/>
                <ContactBackground>
                  <FormContainer name="contact" onSubmit={this.handleSubmit}>
                  <Title>We'd love to hear from you!</Title>
                  <p>Have a project you want us to help you with? Get in touch.</p>
                  <input type="hidden" name="form-name" value="contact" />
                  <WrapInput>
                    <label>
                      Your Name: 
                    </label>     
                      <Box type="text" placeholder="Enter your name..." name="name" value={name} onChange={this.handleChange} />
                    <Focus></Focus>  
                    </WrapInput>
                    <br/>    
                    <WrapInput>            
                      <label>
                        Your Email:
                      </label>
                        <Box type="email" placeholder="Enter your email..." name="email" value={email} onChange={this.handleChange} />
                      <Focus></Focus>
                    </WrapInput>
                    <br/>
                    <WrapInput>       
                      <label>
                        Message: 
                      </label>
                      <TextBox name="message" placeholder="Enter your message..." value={message} onChange={this.handleChange} />
                    </WrapInput>
                      <br/>
                      <Btn type="submit">Send</Btn>
                  </FormContainer>
                </ContactBackground>
                <br/>
              </Col>
            </Row>
          </Grid> 
      </section>
    );
  }
}

export default Contact;
