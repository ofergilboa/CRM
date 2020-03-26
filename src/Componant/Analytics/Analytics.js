import React, { Component } from 'react'
import Charts from './Charts/Charts'
import Badges from './Badges/Badges'
import './Analytics.css'


class Analytics extends Component {
   render() {
      return (
         <div id="analytics">
            <Badges clients={this.props.clients} />
            <Charts clients={this.props.clients} />
            
         </div>)
   }
}
export default Analytics