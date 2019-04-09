import React, { Component, Fragment } from 'react';
import { Menu, Icon, Button } from 'semantic-ui-react';

class Navbar extends Component {
  render() {
    return (
      <Fragment>
         <Menu size='massive' id="navbar">
            <Menu.Item>
               <img src={require(`../images/fanduel_logo.png`)} alt="" />
            </Menu.Item>
            <Menu.Item name="lobby" id="navbar-item" />
            <Menu.Item name="upcoming" id="navbar-item" />
            <Menu.Item active name="live" id="navbar-item">Live<Icon name="angle down"/></Menu.Item>
            <Menu.Item name="history" id="navbar-item" />
            <Menu.Menu position="right">
               <Menu.Item name="help" id="navbar-item">Help<Icon name="angle down"/></Menu.Item>
               <Menu.Item name="username" id="navbar-item"><Icon name="user circle"/>User<Icon name="angle down"/></Menu.Item>
               <Menu.Item name="funds" id="navbar-item">
                  $1,000,000.00<br/>
                  BALANCE       
               </Menu.Item>
            </Menu.Menu> 
            <Button id="button" color="green" size="tiny">Add funds</Button>
         </Menu>
      </Fragment>
    );
  }
}

export default Navbar;
