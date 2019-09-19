import React, { Component } from 'react'
import '../Badges/Badges.css'


class OutstandingClients extends Component {
   render() {

      let notSold = 0

      this.props.clients.forEach(c => !c.sold ? notSold++ : null)

      return (
         <div className="Badges">
            Outstanding Clients: {notSold}

         </div>)
   }
}
export default OutstandingClients