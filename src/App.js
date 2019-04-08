import React, { Component, Fragment } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import './App.css';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import Scoring from './Scoring';

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
         <Grid columns='equal' padded>
            <Grid.Row stretched>
               <Grid.Column width={11} id="left-column">
                  <Segment>1</Segment>
               </Grid.Column>
               <Grid.Column width={5} id="right-column">
                  <Segment>
                     <Scoring />
                  </Segment>
               </Grid.Column>
            </Grid.Row>
         </Grid>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(App);
