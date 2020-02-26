import React from "react";
import About from "../About/About";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import styled from 'styled-components';
import ThankYou from '../Contact/ThankYou';

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
`;

export const Item = styled.li`
    cursor: pointer;
    list-style-type: none;
    margin-right: 1.25rem;

    &:last-child {
      margin-right: 0;
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
`;

export const Page = styled(Link)`
  color: #fff;
  font-size: 1.25rem;
  text-decoration: none;
`;

function Nav() {
  return (
    <Router>
      <section>
        <nav>
          <NavBar>
            <Item>
              <Page to="/">Home</Page>
            </Item>
            <Item>
              <Page to="/about">About</Page>
            </Item>
            <Item>
              <Page to="/services">Services</Page>
            </Item>
            <Item>
              <Page to="/contact">Contact</Page>
            </Item>
          </NavBar>
        </nav>
      </section>
      <Route path="/" exact component={Home} />
      <Route path="/about"  component={About} />
      <Route path="/services"  component={Services} />
      <Route path="/contact"  component={Contact} />
      <Route path="/thank-you"  component={ThankYou} />
    </Router>
  );
}
export default Nav;