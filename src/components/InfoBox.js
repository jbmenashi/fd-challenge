import React, { Component, Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
   return {
      gameInfo: state.gameInfo
   }
}

class InfoBox extends Component {
   render() {
      return (
         <Fragment>
            <div id="infobox-div">
               <Grid stretched padded style={{height: '100%'}}>
                  <Grid.Row id="infobox-row-1" >
                     <Grid.Column width={5} id="infobox-away-team">
                        <p>GOLDEN STATE<br/>
                        <span style={{fontWeight: 'bold', fontSize: '1.2em'}}>WARRIORS</span>
                        </p>
                     </Grid.Column>
                     <Grid.Column width={1} id="infobox-away-score">
                     <p>96</p>
                     </Grid.Column>
                     <Grid.Column width={4} id="infobox-game-info">
                        <div>
                           <span style={{fontWeight: 'bold', fontSize: '1.3em'}}>{this.props.gameInfo.time_left} {this.props.gameInfo.quarter}th</span><br/><br/>
                           {this.props.gameInfo.arena} <br/>
                           {this.props.gameInfo.location}
                        </div>
                     </Grid.Column>
                     <Grid.Column width={1} id="infobox-home-score">
                     <p>81</p>
                     </Grid.Column>
                     <Grid.Column width={5} id="infobox-home-team">
                        <p>OKLAHOMA CITY<br/>
                           <span style={{fontWeight: 'bold', fontSize: '1.2em'}}>THUNDER</span>
                        </p>
                     </Grid.Column>
                  </Grid.Row>
                  <Grid.Row id="infobox-row-2">
                     <Grid.Column width={16}>
                        <p>LAST PLAY: TV TIMEOUT. GO GET A SNACK.</p>
                     </Grid.Column>
                  </Grid.Row>
                  <Grid.Row id="infobox-row-3">
                     <Grid.Column width={4}>
                        A
                     </Grid.Column>
                     <Grid.Column width={8}>
                        <img src={require(`../images/shot_chart.png`)} alt="" />
                     </Grid.Column>
                     <Grid.Column width={4}>
                        C
                     </Grid.Column>
                  </Grid.Row>
               </Grid>
            </div>
         </Fragment>
      );
   }
}

export default connect(mapStateToProps)(InfoBox);