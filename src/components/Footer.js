import React, { Component, Fragment } from 'react';
import { Menu, Icon, Button } from 'semantic-ui-react';

class Footer extends Component {
   render() {
      return (
         <Fragment>
            <div id="footer">
               <div id="footer-sports">
                  <Menu secondary id="footer-menu">
                     <Menu.Item active name='NBA'/>
                     <Menu.Item name='MLB'/>
                     <Menu.Item name='NCAAF'/>
                  </Menu>
               </div>
               <div id="footer-scores">

               </div>
            </div>
         </Fragment>
      );
   }
}

export default Footer;