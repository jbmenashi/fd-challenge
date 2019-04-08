import React, { Component, Fragment } from 'react';
import { Menu, Icon, Button } from 'semantic-ui-react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
   return {
      funds: state.funds
   }
}

const mapDispatchToProps = dispatch => {
   return {
      addFunds: () => dispatch({type: 'ADD_FUNDS'}) //changes funds when you click button, doesn't change display for visual
   }
}

class Navbar extends Component {
  render() {
    return (
      <Fragment>
         <Menu size='massive' id="navbar">
            <Menu.Item>
               <img src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/032018/untitled-1_341.png?FbJ4ipi9S5_57j4d8bj_0xIeiwDUP1TD&itok=pVUrNAy2" />
            </Menu.Item>
            <Menu.Item name="lobby" id="navbar-item" />
            <Menu.Item name="upcoming" id="navbar-item" />
            <Menu.Item active name="live" id="navbar-item">Live<Icon name="angle down"/></Menu.Item>
            <Menu.Item name="history" id="navbar-item" />
            <Menu.Menu position="right">
               <Menu.Item name="help" id="navbar-item">Help<Icon name="angle down"/></Menu.Item>
               <Menu.Item name="username" id="navbar-item"><Icon name="user circle"/>User<Icon name="angle down"/></Menu.Item>
               <Menu.Item name="funds" id="navbar-item">
                  $1,000,000.00  <br/>
                  BALANCE    
                  <Button color="green" size="small" onClick={() => this.props.addFunds()}>Add funds</Button>
               </Menu.Item>
            </Menu.Menu> 
         </Menu>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
