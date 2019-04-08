import React, { Component } from 'react';

class Play extends Component {
   render() {
      console.log(this.props)
      return (
         <div id='play'>
            <div id="play-image">
               <img src={require(`../images/${this.props.scoring_player}.png`)} width={90} height={75}/>
            </div>
         </div>
      );
   }
}

export default Play;