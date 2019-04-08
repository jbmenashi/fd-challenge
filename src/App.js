import React, { Component, Fragment } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import './App.css';
import {connect} from 'react-redux';
import Navbar from './components/Navbar';
import Scoring from './components/Scoring';
import Stats from './components/Stats';
import PlayByPlay from './components/PlayByPlay'

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
         <Grid padded>
            <Grid.Row stretched>
               <Grid.Column width={11} id="left-column">
                  <Grid stretched columns={1}>
                     <Grid.Column width={16}>
                        <Segment>1</Segment>
                     </Grid.Column>
                  </Grid>
                  <Grid stretched columns={2}>
                     <Grid.Column width={8}>
                        <Segment>
                           <PlayByPlay/>
                        </Segment>
                     </Grid.Column>
                     <Grid.Column width={8}>
                        <Segment>
                           <Stats/>
                        </Segment>          
                     </Grid.Column>
                  </Grid>     
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
