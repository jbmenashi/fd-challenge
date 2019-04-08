import React, { Component, Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import './App.css';
import {connect} from 'react-redux';

const mapStateToProps = state => {
   return {
      test: state.test
   }
}

class App extends Component {
  render() {
    return (
      <Fragment>
         <Menu size='massive' id="navbar">
            <Menu.Item>
               <img src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/032018/untitled-1_341.png?FbJ4ipi9S5_57j4d8bj_0xIeiwDUP1TD&itok=pVUrNAy2" />
            </Menu.Item>
            <Menu.Item name="lobby" id="navbar-item" />
            <Menu.Item name="upcoming" id="navbar-item" />
            <Menu.Item name="live" id="navbar-item" />
            <Menu.Item name="history" id="navbar-item" />
            <Menu.Menu position="right">
               <Menu.Item name="help" id="navbar-item" />
               <Menu.Item name="username" id="navbar-item" />
               <Menu.Item name="funds" id="navbar-item" />
            </Menu.Menu>
            
         </Menu>
      
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(App);
