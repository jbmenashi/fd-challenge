import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
   return {
      changeFooterScore: (id) => dispatch({type: "CHANGE_FOOTER_SCORE", payload: id})
   }
}

class FooterScore extends Component {
   render() {
      let suf;
      if (this.props.quarter === 2) {
         suf = "nd"
      }
      else if (this.props.quarter === 3) {
         suf = "rd"
      }
      else {
         suf = "th"
      }

      return (
         <div className="footer-score" onClick={() => this.props.changeFooterScore(this.props.game_id)}>
            <div className="footer-score-scores">
               <div className="footer-score-abbrv">
                  {this.props.away_team.abbrev} <br/>
                  {this.props.home_team.abbrev}
               </div>
               <div className="footer-score-points">
                  {this.props.away_team.score} <br/>
                  {this.props.home_team.score}
               </div>
            </div>

            <div className="footer-score-time">
               {this.props.time_left} {this.props.quarter}{suf}
            </div>
         </div>
      );
   }
}

export default connect(null, mapDispatchToProps)(FooterScore);