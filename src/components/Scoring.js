import React, { Component, Fragment } from 'react';
import { Menu, Divider } from 'semantic-ui-react';

class Scoring extends Component {
   render() {
      return (
         <Fragment>
            <div className="column-header-black">
               YOUR SCORING
            </div>
            <Menu secondary id="games-menu">
               <Menu.Item name="THIS GAME" id="this-game-item"/>
               <Menu.Item name="ALL GAMES" id="all-games-item"/>
            </Menu>
            <Divider id="games-menu-divider"/>
         </Fragment>
      );
   }
}

export default Scoring;