import React, { Component } from 'react'
import Charts from './Charts/Charts'
import Badges from './Badges/Badges'

class Analytics extends Component {
   render() {
      return (
         <div>
            <Badges clients={this.props.clients} />
            <Charts clients={this.props.clients} />
         </div>)
   }
}
export default Analytics