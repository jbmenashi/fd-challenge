import React, { Component } from 'react';

class Play extends Component {
   render() {
      return (
         <div id='play'>
            <div id="play-image">
               <img src={require(`../images/${this.props.scoring_player}.png`)} width='100%' height='100%' alt="" />
            </div>
            <div id="play-info">
               <div>{this.props.time_left} {this.props.quarter}th</div>
               <div id="play-desc">{this.props.description}</div>
            </div>
            <div id="play-score">
               {this.props.away_score}-{this.props.home_score}, GS
            </div>
         </div>
      );
   }
}

export default Play;