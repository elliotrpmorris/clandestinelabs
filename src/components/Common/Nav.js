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

  &:focus,:active{
    outline: none;
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

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }
  render () {
    return (
      <Router>
        <div id="outer-container">
          <Menu 
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
            pageWrapId={ "page-wrap" } 
            outerContainerId={ "outer-container" } 
            disableAutoFocus 
            right
          >
            <Page onClick={() => this.closeMenu()} to="/">Home</Page> 
            <Page onClick={() => this.closeMenu()} to="/about">About</Page> 
            <Page onClick={() => this.closeMenu()} to="/services">Services</Page>      
            <Page onClick={() => this.closeMenu()} to="/Work">Projects</Page>        
            <Page onClick={() => this.closeMenu()} to="/contact">Contact</Page>      
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
}
export default Nav;