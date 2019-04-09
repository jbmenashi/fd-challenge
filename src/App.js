import React, { Component, Fragment } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import './App.css';
import {connect} from 'react-redux';
import Navbar from './components/Navbar';
import InfoBox from './components/InfoBox';
import PlayByPlay from './components/PlayByPlay';
import Stats from './components/Stats';
import Scoring from './components/Scoring';
import Footer from './components/Footer';

const mapStateToProps = state => {
   return {
      plays: state.plays,
      footerScores: state.footerScores,
      gameInfo: state.gameInfo
   }
}

const mapDispatchToProps = dispatch => {
   return {
      fetchPlays: (plays) => dispatch({type: "FETCH_PLAYS", payload: plays}),
      fetchFooterScores: (scores) => dispatch({type: "FETCH_FOOTER_SCORES", payload: scores}),
      fetchGameInfo: (gameInfo) => dispatch({type: "FETCH_GAME_INFO", payload: gameInfo}),
      fetchAwayFG: (stats) => dispatch({type: "FETCH_AWAY_FG", payload: stats}),
      fetchAwayFT: (stats) => dispatch({type: "FETCH_AWAY_FT", payload: stats}),
      fetchAway3P: (stats) => dispatch({type: "FETCH_AWAY_3P", payload: stats}),
      fetchHomeFG: (stats) => dispatch({type: "FETCH_HOME_FG", payload: stats}),
      fetchHomeFT: (stats) => dispatch({type: "FETCH_HOME_FT", payload: stats}),
      fetchHome3P: (stats) => dispatch({type: "FETCH_HOME_3P", payload: stats})
   }
}

class App extends Component {

   componentDidMount() {
      fetch("https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/db")
      .then(res => res.json())
      .then(data => {
         this.props.fetchPlays(data.plays)
         this.props.fetchFooterScores(data.footer_scoreboard)
         this.props.fetchGameInfo(data.game_stats)
         this.props.fetchAwayFG(data.game_stats.away_team.shooting_stats[0])
         this.props.fetchAwayFT(data.game_stats.away_team.shooting_stats[1])
         this.props.fetchAway3P(data.game_stats.away_team.shooting_stats[2])
         this.props.fetchHomeFG(data.game_stats.home_team.shooting_stats[0])
         this.props.fetchHomeFT(data.game_stats.home_team.shooting_stats[1])
         this.props.fetchHome3P(data.game_stats.home_team.shooting_stats[2])
      })
   }

   render() {
      return (
         <Fragment>
            <Navbar/>
            <Grid padded>
               <Grid.Row stretched>
                  <Grid.Column width={11} id="left-column">
                     <Grid stretched columns={1}>
                        <Grid.Column width={16}>
                           <Segment>
                              <InfoBox/>
                           </Segment>
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
            <Footer/>
         </Fragment>
      );
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
