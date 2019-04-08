import React, { Component, Fragment } from 'react';
import { Menu, Icon, Button } from 'semantic-ui-react';
import './App.css';
import {connect} from 'react-redux';
import Navbar from './Navbar'

const mapStateToProps = state => {
   return {
      test: state.test
   }
}

class App extends Component {
  render() {
    return (
      <Fragment>
         <Navbar/>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(App);
