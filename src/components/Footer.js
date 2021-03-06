import React, { Component, Fragment } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import FooterScore from './FooterScore'
import FooterScoreSuper from './FooterScoreSuper'

const mapStateToProps = state => {
   return {
      footerScores: state.footerScores,
      activeFooterId: state.activeFooterId
   }
}

class Footer extends Component {
   render() {
      return (
         <Fragment>
            <div id="footer">
               <div id="footer-categories">
                  <Menu secondary size="small" id="footer-menu">
                     <Menu.Item active name='NBA'/>
                     <Menu.Item name='MLB'/>
                     <Menu.Item name='NCAAF'/>
                  </Menu>
               </div>
               <div id="icon-left">
                  <Icon size="big" name="angle left"/>
               </div>
               <div id="icon-right">
                  <Icon size="big" name="angle right"/>
               </div>
               <div id="footer-scores">
                  {this.props.footerScores.map(score => {
                     if (this.props.activeFooterId === score.game_id) {
                        // Clicking on different scores on the bottom changes the conditional, resulting in different components
                        // This is the elongated score with stats...
                        return <FooterScoreSuper {...score} key={score.game_id}/>
                     }
                     else {
                        // ...and this is the short score
                        return <FooterScore {...score} key={score.game_id}/>
                     }
                  })}
               </div>

            </div>
         </Fragment>
      );
   }
}

export default connect(mapStateToProps)(Footer);