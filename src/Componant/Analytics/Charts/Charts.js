import React, { Component } from 'react'
import '../Charts/Charts.css'
import TopEmployees from './TopEmployees'
import SalesByCountry from './SalesByCountry'
import SalesSince from './SalesSince'



class Charts extends Component {
   render() {
      return (
         <div id="charts">
            {/* Charts */}
            <TopEmployees clients={this.props.clients}/>
            <SalesByCountry clients={this.props.clients}/>
            <SalesSince clients={this.props.clients}/>
         </div>)
   }
}
export default Charts