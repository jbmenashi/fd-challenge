import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Play from './Play'

const mapStateToProps = state => {
   return {
      plays: state.plays
   }
}

class PlayByPlay extends Component {
   render() {
      return (
         <Fragment>
            <div className="column-header-black">
               PLAY BY PLAY
            </div>
            <div id="plays">
               {this.props.plays.map(play => <Play {...play} key={play.id} />)}
            </div>        
         </Fragment>
      );
   }
}

export default connect(mapStateToProps)(PlayByPlay);