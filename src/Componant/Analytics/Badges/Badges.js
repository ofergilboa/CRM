import React, { Component } from 'react'
import NewClients from '../Badges/NewClients'
import EmailsSent from '../Badges/EmailsSent'
import OutstandingClients from '../Badges/OutstandingClients'
import HottestCountry from '../Badges/HottestCountry'
import '../Badges/Badges.css'


class Badges extends Component {
   render() {
      return (
         <div className="allBadges">
            <NewClients clients={this.props.clients} />
            <EmailsSent clients={this.props.clients} />
            <OutstandingClients clients={this.props.clients} />
            <HottestCountry clients={this.props.clients} />
         </div>)
   }
}
export default Badges