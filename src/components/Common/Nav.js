import React from "react";
import About from "../About/About";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import styled from 'styled-components';
import Work from '../Work/Work';
import { elastic as Menu } from 'react-burger-menu'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

export const NavBar = styled.div`      
  background-color: #323741;  
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  flex-wrap: wrap;
`;

export const Page = styled(Link)`
  cursor: pointer;
  padding-bottom: .5rem;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;

  @media (min-width: 414px) { 
    font-size: 1.25rem;
  }

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width 0.3s;
    transform: background 0.5s;
    position: relative;
    z-index: 2;
  }

  @media (hover) {
    &:hover,
    &:focus {
      color: #fff;
      transition: color 0.6s;
      &:after {
        width: 100%;
      }
    }
  }
`;

function Nav() {
  return (
    <Router>
      <div id="outer-container">
        <Menu isOpen={false} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } disableAutoFocus right>
          <Page to="/">Home</Page> 
          <Page to="/about">About</Page> 
          <Page to="/services">Services</Page>      
          <Page to="/Work">Projects</Page>        
          <Page to="/contact">Contact</Page>      
        </Menu>
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/about"  component={About} />
      <Route path="/services"  component={Services} />
      <Route path="/contact"  component={Contact} />
      <Route path="/work"  component={Work} />
    </Router>
  );
}
export default Nav;