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

      let stats1;
      let stats2;
      let stats3;
      let stats4;

      if (this.props.home_team.abbrev === this.props.top_performers[0].team) {
         stats1 = `${this.props.top_performers[0].name}, ${this.props.top_performers[0].position}`
         stats2 = `${this.props.top_performers[0].points} points, ${this.props.top_performers[0].rebounds} rebounds`
         stats3 = `${this.props.top_performers[1].name}, ${this.props.top_performers[1].position}`
         stats4 = `${this.props.top_performers[1].points} points, ${this.props.top_performers[1].rebounds} rebounds`   
      }
      else {
         stats3 = `${this.props.top_performers[0].name}, ${this.props.top_performers[0].position}`
         stats4 = `${this.props.top_performers[0].points} points, ${this.props.top_performers[0].rebounds} rebounds`
         stats1 = `${this.props.top_performers[1].name}, ${this.props.top_performers[1].position}`
         stats2 = `${this.props.top_performers[1].points} points, ${this.props.top_performers[1].rebounds} rebounds`   
      }

      return (
         <div className="footer-score super" onClick={() => this.props.changeFooterScore(this.props.game_id)}>
            <div className="footer-score-scores">
               <div className="footer-score-abbrv super">
                  {this.props.away_team.name.toUpperCase()} <br/>
                  {this.props.home_team.name.toUpperCase()}
               </div>
               <div className="footer-score-points super">
                  {this.props.away_team.score} <br/>
                  {this.props.home_team.score}
               </div>
            </div>
            <div className="star-player">
               <div className="star-player-team">
                  {this.props.away_team.abbrev}
               </div>
               <div className="star-player-stats">
                  {stats3} <br/>
                  {stats4}
               </div>
            </div>
            <div className="star-player">
               <div className="star-player-team">
                  {this.props.home_team.abbrev}
               </div>
               <div className="star-player-stats">
                  {stats1} <br/>
                  {stats2}
               </div>
            </div>
            <div className="footer-score-time super">
               {this.props.time_left} {this.props.quarter}{suf} - TV: ESPN
            </div>
         </div>
      );
   }
}

export default connect(null, mapDispatchToProps)(FooterScore);